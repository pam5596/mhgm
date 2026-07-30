import { describe, expect, it } from "vitest";
import { AuthPublicUsersSettingsGETResponseDTO } from "../../../shared/dtos";

describe("AuthPublicUsersSettingsGETResponseDTOの単体テスト", () => {
	const values = {
		body: {
			setting: {
				quest_limit: 2,
			},
			keywords: [
				{
					id: 1,
					keyword: "string",
					action: "ENTRY",
				},
				{
					id: 2,
					keyword: "string",
					action: "CANCEL",
				},
			],
		},
	};

	it("DTOが作成できる", () => {
		expect(() => new AuthPublicUsersSettingsGETResponseDTO(values)).not.toThrow();
	});
});
