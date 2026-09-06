import { zocker } from "zocker"

describe("AuthGoogleGETRequestDTOの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		const mock = zocker(AuthGoogleGETRequestDTO.schema()).generate()

		expect(() => new AuthGoogleGETRequestDTO(mock)).not.toThrow();
	});
});
