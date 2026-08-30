import { zocker } from "zocker";

describe("AuthPublicKeywordsDELETERequestDTOの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		const mock = zocker(AuthPublicKeywordsDELETERequestDTO.schema()).generate();

		expect(() => new AuthPublicKeywordsDELETERequestDTO(mock)).not.toThrow();
	});
});
