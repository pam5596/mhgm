import z from "zod";
import { BaseDTO } from "./_base";
import type { WebhooksMemberPOSTRequest } from "../dtos/interfaces/webhooks_member.post.req"

export class WebhooksMemberPOSTRequestDTO extends BaseDTO<WebhooksMemberPOSTRequest> {
  constructor(values: WebhooksMemberPOSTRequest) {
    super(values, WebhooksMemberPOSTRequestDTO.schema())
  }

  private static schema() {
    return z.strictObject({
      sessions: z.strictObject({
        user: z.strictObject({
          channel_id: z.string()
        })
      }),
      body: z.strictObject({
        users: z.array(
          z.strictObject({
            channel_id: z.string(),
            name: z.string(),
            avatar: z.string(),
            status: z.string(),
            join_quests: z.number(),
            wait_quests: z.number()
          })
        )
      }),
    })
  }
} 