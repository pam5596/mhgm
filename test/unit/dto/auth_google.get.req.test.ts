import { describe, expect, it } from "vitest";
import { AuthGoogleGETRequestDTO } from "../../../shared/dtos";

describe("AuthGoogleGETRequestDTOの単体テスト", () => {
	const values = {
		sessions: {
			access_token: "string"
		},
	};

	it("DTOが作成できる", () => {
		expect(() => new AuthGoogleGETRequestDTO(values)).not.toThrow();
	});
});
