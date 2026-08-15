import type { AuthGoogleGETRequestDTO } from "../../shared/dtos/auth_google.get.req.dto";
import { NotFoundError } from "../../shared/errors/not_found";
import type { GoogleClient } from "../clients/google";
import type { BaseService } from "./_base";
import type { UserRepository } from "../repositories/user.repository";
import type { SettingRepository } from "../repositories/setting.repository";
import type { KeywordRepository } from "../repositories/keyword.repository";
import { UserModel } from "../../shared/models/user.model";
import { UnknownError } from "../../shared/errors/unknown";
import { SettingModel } from "~~/shared/models/setting.model";
import { KeywordModel } from "~~/shared/models/keyword.model";
import { PrismaORMClient } from "../clients/prisma";

export class AuthGoogleGETService
  implements
    BaseService<AuthGoogleGETRequestDTO, void>
{
  constructor(
    private googleClient: GoogleClient,
    private prismaClient: PrismaORMClient,
    private userRepository: UserRepository,
    private settingRepository: SettingRepository,
    private keywordRepository: KeywordRepository
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

    const finded_user = await this.userRepository.findByChannelID(channel.id!)
    if (finded_user) {
      await setUserSession(event, {
        user: {
          user_id: finded_user.values.id!,
          channel_id: finded_user.values.channel_id,
          name: finded_user.values.name,
          avatar: finded_user.values.avatar
        },
        secure: {
          access_token
        }
      })
    } else {
      await this.userRepository.client.$transaction(async (tx) => {
        this.userRepository.client = tx
        const user = await this.userRepository.upsert(
          new UserModel({
            channel_id: channel_props.channel_id!,
            name: channel_props.name!,
            avatar: channel_props.avatar!
          })
        )
        this.userRepository.client = prismaClient

        this.settingRepository.client = tx
        await this.settingRepository.create(
          new SettingModel({
            user_id: user.values.id!,
            quest_limit: 2
          })
        )
        this.settingRepository.client = prismaClient

        this.keywordRepository.client = tx
        await this.keywordRepository.create(
          new KeywordModel({
            user_id: user.values.id!,
            keyword: "参加希望",
            action: "ENTRY"
          })
        )
        await this.keywordRepository.create(
          new KeywordModel({
            user_id: user.values.id!,
            keyword: "参加辞退",
            action: "CANCEL"
          })
        )
        this.keywordRepository.client = prismaClient

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
      })
    }
  }
}
