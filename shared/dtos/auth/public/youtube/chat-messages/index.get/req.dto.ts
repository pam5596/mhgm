import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicYoutubeChatMessagesGETRequest } from "./req.dto.d" 

export class AuthPublicYoutubeChatMessagesGETRequestDTO extends BaseDTO<AuthPublicYoutubeChatMessagesGETRequest> {
  constructor(values: AuthPublicYoutubeChatMessagesGETRequest) {
    super(values, AuthPublicYoutubeChatMessagesGETRequestDTO.schema())
  }

  static schema() {
    return z.strictObject({
      sessions: z.strictObject({
        access_token: z.string()
      }),
      params: z.strictObject({
        live_chat_id: z.string(),
        next_page_token: z.string()
      })
    })
  }
}