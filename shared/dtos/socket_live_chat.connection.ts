import z from "zod";
import { BaseDTO } from "./_base";
import type { SocketLiveChatConnection } from "./interfaces/socket_live_chat.connection"

export class SocketLiveChatConnectionDTO extends BaseDTO<SocketLiveChatConnection> {
  constructor(values: SocketLiveChatConnection) {
    super(values, SocketLiveChatConnectionDTO.schema())
  }

  private static schema() {
    return z.strictObject({
      socket_auth: z.strictObject({
        channel_id: z.string(),
        stream_id: z.string(),
        broadcast_id: z.number()
      })
    })
  }
} 