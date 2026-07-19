export class SocketLiveChatConnectionService implements BaseService<
  SocketLiveChatConnectionDTO,
  void
>{
  constructor(
    private liveChatManageClient: LiveChatManageClient,
    private socketIOClient: SocketIOClient,
    private userRepository: UserRepository,
    private keywordRepository: KeywordRepository
  ) {}

  async execute(request: SocketLiveChatConnectionDTO) {
    const { channel_id, stream_id } = request.values.socket_auth
    const user = await this.userRepository.findByChannelID(channel_id)
    if (!user) throw new NotFoundError(this.constructor.name, request.values)
    
    const keywords = await this.keywordRepository.findManyByUserId(user.id!)
    this.liveChatManageClient.subscribe(stream_id, (chat) => {
      const firstMessage = chat.message[0]
      const messageText = firstMessage && 'text' in firstMessage ? firstMessage.text : undefined
      const keyword = firstMessage ? keywords.find(k => k.keyword === messageText) : undefined

      if (keyword) this.socketIOClient.liveChat.emit(`emit-${channel_id}`, {
        user: {
          channel_id: chat.author.thumbnail,
          name: chat.author.name,
          avatar: chat.author.thumbnail?.url
        },
        chat: {
          message: messageText!,
          action: keyword.action,
          keyword: keyword.keyword
        }
      })
    })
  }
}