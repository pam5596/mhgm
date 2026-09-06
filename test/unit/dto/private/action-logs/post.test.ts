import { zocker } from "zocker";

describe("AuthPublicActionlogsPOSTの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		const mock = zocker(AuthPublicActionlogsPOSTRequestDTO.schema()).generate();

		expect(() => new AuthPublicActionlogsPOSTRequestDTO(mock)).not.toThrow();
	});
});
