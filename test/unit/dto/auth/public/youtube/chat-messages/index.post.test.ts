import { zocker } from "zocker";

describe("AuthPublicYoutubeChatMessagesPOSTの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		const mock = zocker(AuthPublicYoutubeChatMessagesPOSTRequestDTO.schema()).generate();

		expect(() => new AuthPublicYoutubeChatMessagesPOSTRequestDTO(mock)).not.toThrow();
	});
});
