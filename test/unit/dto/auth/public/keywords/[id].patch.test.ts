import { zocker } from "zocker";

describe("AuthPublicKeywordsPATCHRequestDTOの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		const mock = zocker(AuthPublicKeywords$ID$PATCHRequestDTO.schema()).generate();

		expect(() => new AuthPublicKeywords$ID$PATCHRequestDTO(mock)).not.toThrow();
	});
});
