import z from "zod";
import { BaseDTO } from "./_base";
import type { AuthPublicYoutubeChatMessagesPOSTRequest } from "./interfaces/auth_public_youtube_chat_messages.post.req.dto";

export class AuthPublicYoutubeChatMessagesPOSTRequestDTO extends BaseDTO<AuthPublicYoutubeChatMessagesPOSTRequest> {
  constructor(values: AuthPublicYoutubeChatMessagesPOSTRequest) {
    super(values, AuthPublicYoutubeChatMessagesPOSTRequestDTO.schema());
  }

  private static schema() {
    return z.strictObject({
      sessions: z.strictObject({
        access_token: z.string()
      }),
      body: z.strictObject({
        stream_id: z.string(),
        message: z.string()
      }),
    });
  }
}
