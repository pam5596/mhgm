import { WebhooksMemberPOSTRequestDTO } from "~~/shared/dtos/webhooks_member.post.req.dto";
import { BaseService } from "./_base";

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