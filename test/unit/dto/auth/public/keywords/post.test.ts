import { zocker } from "zocker";

describe("AuthPublicKeywordsPOSTの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		const mock = zocker(AuthPublicKeywordsPOSTRequestDTO.schema()).generate();

		expect(() => new AuthPublicKeywordsPOSTRequestDTO(mock)).not.toThrow();
	});

	it("ResponseDTOが作成できる", () => {
		const mock = zocker(AuthPublicKeywordsPOSTResponseDTO.schema()).generate();

		expect(() => new AuthPublicKeywordsPOSTResponseDTO(mock)).not.toThrow();
	});
});
