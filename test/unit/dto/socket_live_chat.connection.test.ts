import { describe, expect, it } from "vitest"
import { SocketLiveChatConnectionDTO } from "../../../shared/dtos/socket_live_chat.connection"

describe("SocketLiveChatConnectionDTOの単体テスト", () => {
  const values = {
    socket_auth: {
      channel_id: "string",
      strema_id: "string"
    }
  }

  it("DTOが作成できる", () => {
    expect(() => new SocketLiveChatConnectionDTO(values) ).not.toThrow()
  })
})