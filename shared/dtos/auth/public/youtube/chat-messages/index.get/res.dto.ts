import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicYoutubeChatMessagesGETResponse } from "./res.dto.d"

export class AuthPublicYoutubeChatMessagesGETResponseDTO extends BaseDTO<AuthPublicYoutubeChatMessagesGETResponse> {
  constructor(values: AuthPublicYoutubeChatMessagesGETResponse) {
    super(values, AuthPublicYoutubeChatMessagesGETResponseDTO.schema())
  }

  static schema() {
    return z.strictObject({
      chat_messages: z.array(
        z.strictObject({
          user: z.strictObject({
            id: z.number(),
            name: z.string(),
            avatar: z.string(),
            channel_id: z.string()
          }),
          keyword: z.strictObject({
            id: z.number(),
            action: z.string()
          }),
          message: z.string()
        })
      )
    })
  }
}