import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicYoutubeChatMessagesPOSTRequest } from "./req.dto.d";

export class AuthPublicYoutubeChatMessagesPOSTRequestDTO extends BaseDTO<AuthPublicYoutubeChatMessagesPOSTRequest> {
  constructor(values: AuthPublicYoutubeChatMessagesPOSTRequest) {
    super(values, AuthPublicYoutubeChatMessagesPOSTRequestDTO.schema());
  }

  static schema() {
    return z.strictObject({
      sessions: z.strictObject({
        access_token: z.string()
      }),
      body: z.strictObject({
        live_chat_id: z.string(),
        message: z.string()
      }),
    });
  }
}
