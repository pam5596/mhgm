export class POSTWebhooksMemberService implements BaseService<
  WebhooksMemberPOSTRequestDTO,
  void
>{
  constructor(
    private socketIOClient: SocketIOClient

  ) {}

  async execute(request: WebhooksMemberPOSTRequestDTO) {
    const { channel_id } = request.values.sessions.user
    this.socketIOClient.member.emit(`emit-${channel_id}`, request.values.body)
  }
}