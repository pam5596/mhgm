import z from "zod";
import { BaseDTO } from "./_base";
import type { SocketLiveChatEmit } from "./interfaces/socket_live_chat.emit"

export class SocketLiveChatEmitDTO extends BaseDTO<SocketLiveChatEmit> {
  constructor(values: SocketLiveChatEmit) {
    super(values, SocketLiveChatEmitDTO.schema())
  }

  private static schema() {
    return z.strictObject({
      socket: z.strictObject({
        user: z.strictObject({
          channel_id: z.string(),
          name: z.string(),
          avatar: z.string()
        }),
        chat: z.strictObject({
          message: z.string(),
          action: z.string(),
          keyword: z.string()
        })
      })
    })
  }
} 