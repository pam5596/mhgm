import { zocker } from "zocker";

describe("AuthPublicKeywordsDELETERequestDTOの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		const mock = zocker(AuthPublicKeywords$ID$DELETERequestDTO.schema()).generate();

		expect(() => new AuthPublicKeywords$ID$DELETERequestDTO(mock)).not.toThrow();
	});
});
