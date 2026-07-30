import { describe, expect, it } from "vitest";
import { AuthPublicUsersSettingsPATCHRequestDTO } from "../../../shared/dtos";

describe("AuthPublicUsersSettingsPATCHRequestDTOの単体テスト", () => {
	const values = {
		sessions: {
			user_id: 1,
		},
		body: {
			quest_limit: 2,
		},
	};

	it("DTOが作成できる", () => {
		expect(() => new AuthPublicUsersSettingsPATCHRequestDTO(values)).not.toThrow();
	});
});
