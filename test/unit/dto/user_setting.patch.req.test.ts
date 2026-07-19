import { describe, expect, it } from "vitest";
import { UsersSettingsPATCHRequestDTO } from "../../../shared/dtos/users_settings.patch.req.dto";

describe("UsersSettingsPATCHRequestDTOの単体テスト", () => {
	const values = {
		sessions: {
			user: {
				user_id: 1,
			},
		},
		body: {
			quest_limit: 2,
		},
	};

	it("DTOが作成できる", () => {
		expect(() => new UsersSettingsPATCHRequestDTO(values)).not.toThrow();
	});
});
