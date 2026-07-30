import { describe, expect, it } from "vitest";
import { AuthPublicKeywordsPOSTRequestDTO } from "../../../shared/dtos";

describe("AuthPublicKeywordsPOSTRequestDTOの単体テスト", () => {
	const values = {
		sessions: {
			user_id: 1,
		},
		body: {
			keyword: "string",
			action: "CANCEL",
		},
	};

	it("DTOが作成できる", () => {
		expect(() => new AuthPublicKeywordsPOSTRequestDTO(values)).not.toThrow();
	});
});
