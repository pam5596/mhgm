import { describe, expect, it } from "vitest";
import { KeywordsPATCHRequestDTO } from "../../../shared/dtos/keywords.patch.req.dto";

describe("KeywordsPATCHRequestDTOの単体テスト", () => {
	const values = {
		sessions: {
			user: {
				user_id: 1,
			},
		},
		params: {
			id: "1",
		},
		body: {
			keyword: "string",
		},
	};

	it("DTOが作成できる", () => {
		expect(() => new KeywordsPATCHRequestDTO(values)).not.toThrow();
	});
});
