import { describe, expect, it } from "vitest"
import { WebhooksMemberPOSTRequestDTO } from "../../../shared/dtos/webhooks_member.post.req.dto"

describe("WebhooksMemberPOSTRequestDTOの単体テスト", () => {
  const values = {
    sessions: {
      user: {
        channel_id: "string"
      }
    },
    body: {
      users: [
        {
          channel_id: "string",
          name: "string",
          avatar: "string",
          status: "string",
          join_quests: 1,
          wait_quests: 1
        }
      ]
    }
  }

  it("DTOが作成できる", () => {
    expect(() => new WebhooksMemberPOSTRequestDTO(values) ).not.toThrow()
  })
})