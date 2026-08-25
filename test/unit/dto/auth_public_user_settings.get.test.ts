import { describe, expect, it } from "vitest";
import { AuthPublicUsersSettingsGETRequestDTO } from "../../../shared/dtos/auth_public_users_settings.get.req.dto";
import { AuthPublicUsersSettingsGETResponseDTO } from "../../../shared/dtos/auth_public_users_settings.get.res.dto";

describe("AuthPublicUsersSettingsGETの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		expect(() => new AuthPublicUsersSettingsGETRequestDTO({
			sessions: {
				user_id: 1,
			},
		})).not.toThrow();
	});

	it("ResponseDTOが作成できる", () => {
		expect(() => new AuthPublicUsersSettingsGETResponseDTO({
			body: {
				setting: {
					quest_limit: 2,
					player_limit: 1
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
		})).not.toThrow();
	});
});
