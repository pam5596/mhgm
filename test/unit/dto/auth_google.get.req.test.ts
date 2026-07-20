import { describe, expect, it } from "vitest";
import { AuthGoogleGETRequestDTO } from "../../../shared/dtos/auth_google.get.req.dto";

describe("AuthGoogleGETRequestDTOの単体テスト", () => {
	const values = {
		sessions: {
			secure: {
        access_token: "string"
      }
		},
	};

	it("DTOが作成できる", () => {
		expect(() => new AuthGoogleGETRequestDTO(values)).not.toThrow();
	});
});
