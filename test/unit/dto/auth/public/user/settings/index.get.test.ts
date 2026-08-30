import { zocker } from "zocker";

describe("AuthPublicUsersSettingsGETの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		const mock = zocker(AuthPublicUsersSettingsGETRequestDTO.schema()).generate();

		expect(() => new AuthPublicUsersSettingsGETRequestDTO(mock)).not.toThrow();
	});

	it("ResponseDTOが作成できる", () => {
		const mock = zocker(AuthPublicUsersSettingsGETResponseDTO.schema()).generate();

		expect(() => new AuthPublicUsersSettingsGETResponseDTO(mock)).not.toThrow();
	});
});
