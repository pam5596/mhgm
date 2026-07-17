import z from "zod";
import { BaseDTO } from "./_base";
import type { SocketMemberEmit } from "./interfaces/socket_member.emit"

export class SocketMemberEmitDTO extends BaseDTO<SocketMemberEmit> {
  constructor(values: SocketMemberEmit) {
    super(values, SocketMemberEmitDTO.schema())
  }

  private static schema() {
    return z.strictObject({
      socket: z.strictObject({
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
      })
    })
  }
} 