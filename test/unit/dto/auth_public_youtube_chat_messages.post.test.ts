import { describe, expect, it } from "vitest";
import { AuthPublicYoutubeChatMessagesPOSTRequestDTO } from "../../../shared/dtos/auth_public_youtube_chat_messages.post.req.dto";
import { zocker } from "zocker";

describe("AuthPublicYoutubeChatMessagesPOSTの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		const mock = zocker(AuthPublicYoutubeChatMessagesPOSTRequestDTO.schema()).generate();

		expect(() => new AuthPublicYoutubeChatMessagesPOSTRequestDTO(mock)).not.toThrow();
	});
});
