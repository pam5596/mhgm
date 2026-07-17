import { describe, expect, it } from "vitest"
import { SocketLiveChatEmitDTO } from "../../../shared/dtos/socket_live_chat.emit"

describe("SocketLiveChatEmitDTOの単体テスト", () => {
  const values = {
    socket: {
      user: {
        channel_id: "string",
        name: "string",
        avatar: "string"
      },
      chat: {
        message: "string",
        action: "string",
        keyword: "string"
      }
    }
  }

  it("DTOが作成できる", () => {
    expect(() => new SocketLiveChatEmitDTO(values) ).not.toThrow()
  })
})