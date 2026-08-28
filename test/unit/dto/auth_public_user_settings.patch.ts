import { describe, expect, it } from "vitest";
import { AuthPublicUsersSettingsPATCHRequestDTO } from "../../../shared/dtos/auth_public_users_settings.patch.req.dto";

describe("AuthPublicUsersSettingsPATCHRequestDTOの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		expect(() => new AuthPublicUsersSettingsPATCHRequestDTO({
			sessions: {
				user_id: 1,
			},
			body: {
				quest_limit: 2,
				player_limit: 3,
			},
		})).not.toThrow();
	});
});
