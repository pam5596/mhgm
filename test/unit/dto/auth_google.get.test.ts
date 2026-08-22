import { describe, expect, it } from "vitest";
import { AuthGoogleGETRequestDTO } from "../../../shared/dtos/auth_google.get.req.dto";

describe("AuthGoogleGETRequestDTOの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		expect(() => new AuthGoogleGETRequestDTO({
			sessions: {
				access_token: "string"
			},
		})).not.toThrow();
	});
});
