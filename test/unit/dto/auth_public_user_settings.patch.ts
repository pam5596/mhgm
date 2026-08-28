import { describe, expect, it } from "vitest";
import { AuthPublicUsersSettingsPATCHRequestDTO } from "../../../shared/dtos/auth_public_users_settings.patch.req.dto";
import { zocker } from "zocker";

describe("AuthPublicUsersSettingsPATCHRequestDTOの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		const mock = zocker(AuthPublicUsersSettingsPATCHRequestDTO.schema()).generate();

		expect(() => new AuthPublicUsersSettingsPATCHRequestDTO(mock)).not.toThrow();
	});
});
