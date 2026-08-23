import { describe, expect, it } from "vitest";
import { AuthPublicYoutubeChatMessagesPOSTRequestDTO } from "../../../shared/dtos/auth_public_youtube_chat_messages.post.req.dto";

describe("AuthPublicYoutubeChatMessagesPOSTの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		expect(() => new AuthPublicYoutubeChatMessagesPOSTRequestDTO({
			body: {
				stream_id: "string",
        message: "string"
			},
		})).not.toThrow();
	});
});
