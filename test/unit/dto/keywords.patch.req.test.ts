import { describe, expect, it } from "vitest";
import { AuthPublicKeywordsPATCHRequestDTO } from "../../../shared/dtos";

describe("AuthPublicKeywordsPATCHRequestDTOの単体テスト", () => {
	const values = {
		sessions: {
			user_id: 1,
		},
		params: {
			id: "1",
		},
		body: {
			keyword: "string",
		},
	};

	it("DTOが作成できる", () => {
		expect(() => new AuthPublicKeywordsPATCHRequestDTO(values)).not.toThrow();
	});
});
