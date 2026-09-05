export class AuthGoogleGETService
  implements
    BaseService<AuthGoogleGETRequestDTO, void>
{
  constructor(
    private googleClient: GoogleClient,
    private prismaClient: PrismaORMClient,
    private userRepository: UserRepository,
    private settingRepository: SettingRepository,
    private keywordRepository: KeywordRepository,
    private eventMessageRepository: EventMessageRepository
  ) {}

  async execute(
    request: AuthGoogleGETRequestDTO,
    event: Parameters<Parameters<typeof defineOAuthGoogleEventHandler>[0]["onSuccess"]>[0]
  ) {
    const { access_token } = request.values.sessions;

    const google_response = await this.googleClient
      .youtube(access_token)
      .channels.list({
        mine: true,
        maxResults: 1,
        part: ["snippet"]
      })

    if (!google_response.data.items?.length)
      throw new NotFoundError(
        this.constructor.name,
        google_response.data,
        "errors.not_found.youtube_channel",
      );
    
    const channel = google_response.data.items[0]!
    const channel_props = {
      channel_id: channel.id,
      name: channel.snippet?.title,
      avatar: channel.snippet?.thumbnails?.default?.url
    }
    if (Object.values(channel_props).some(v => !v)) throw new UnknownError(
      undefined,
      this.constructor.name,
      channel
    )

    // 認証コールバックは同一ユーザーで重複・並行して実行され得るため、
    // 事前検索で分岐せず常に冪等な upsert 経路を通す
    const user = await this.prismaClient.$transaction(async (tx) => {
      this.userRepository.client = tx
      const upserted_user = await this.userRepository.upsert(
        new UserModel({
          channel_id: channel_props.channel_id!,
          name: channel_props.name!,
          avatar: channel_props.avatar!
        })
      )
      this.userRepository.client = prismaClient

      const user_id = upserted_user.values.id!

      this.settingRepository.client = tx
      await this.settingRepository.upsert(
        new SettingModel({
          user_id,
          quest_limit: 2,
          player_limit: 3
        })
      )
      this.settingRepository.client = prismaClient

      this.eventMessageRepository.client = tx
      await this.eventMessageRepository.create(
        new EventMessageModel({
          user_id,
          entry_as_joiner: null,
          entry_as_waiter: null,
          duplicate_as_joiner: null,
          duplicate_as_waiter: null,
          cancel: null
        })
      )

      this.keywordRepository.client = tx
      const existing_keywords = await this.keywordRepository.findManyByUserId(user_id)
      const default_keywords = [
        { keyword: "参加希望", action: ActionEnum.entry },
        { keyword: "参加辞退", action: ActionEnum.cancel }
      ] as const
      for (const default_keyword of default_keywords) {
        if (existing_keywords.some(
          (existing) => existing.values.action === default_keyword.action
        )) continue

        await this.keywordRepository.create(
          new KeywordModel({
            user_id,
            keyword: default_keyword.keyword,
            action: default_keyword.action
          })
        )
      }
      this.keywordRepository.client = prismaClient

      return upserted_user
    })

    // セッションはロールバックできないため、コミット後に書き込む
    await setUserSession(event, {
      user: {
        user_id: user.values.id!,
        channel_id: user.values.channel_id,
        name: user.values.name,
        avatar: user.values.avatar
      },
      secure: {
        access_token
      }
    })
  }
}
