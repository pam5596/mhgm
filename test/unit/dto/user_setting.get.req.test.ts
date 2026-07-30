import { describe, expect, it } from "vitest";
import { AuthPublicUsersSettingsGETRequestDTO } from "../../../shared/dtos";

describe("AuthPublicUsersSettingsGETRequestDTOの単体テスト", () => {
	const values = {
		sessions: {
			user_id: 1,
		},
	};

	it("DTOが作成できる", () => {
		expect(() => new AuthPublicUsersSettingsGETRequestDTO(values)).not.toThrow();
	});
});
