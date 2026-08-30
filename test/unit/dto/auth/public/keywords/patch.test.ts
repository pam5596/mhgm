import { zocker } from "zocker";

describe("AuthPublicKeywordsPATCHRequestDTOの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		const mock = zocker(AuthPublicKeywordsPATCHRequestDTO.schema()).generate();

		expect(() => new AuthPublicKeywordsPATCHRequestDTO(mock)).not.toThrow();
	});
});
