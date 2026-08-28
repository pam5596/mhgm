import { describe, expect, it } from "vitest";
import { AuthPublicYoutubeChatMessagesPOSTRequestDTO } from "../../../shared/dtos/auth_public_youtube_chat_messages.post.req.dto";

describe("AuthPublicYoutubeChatMessagesPOSTの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		expect(() => new AuthPublicYoutubeChatMessagesPOSTRequestDTO({
			sessions: {
				access_token: "string"
			},
			body: {
				live_chat_id: "string",
        message: "string"
			},
		})).not.toThrow();
	});
});
