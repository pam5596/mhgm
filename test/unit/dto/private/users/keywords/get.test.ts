import { zocker } from "zocker";

describe("PrivateUsersKeywordsGETの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		const mock = zocker(PrivateUsersKeywordsGETRequestDTO.schema()).generate();

		expect(() => new PrivateUsersKeywordsGETRequestDTO(mock)).not.toThrow();
	});

	it("ResponseDTOが作成できる", () => {
		const mock = zocker(PrivateUsersKeywordsGETResponseDTO.schema()).generate();

		expect(() => new PrivateUsersKeywordsGETResponseDTO(mock)).not.toThrow();
	});
});
