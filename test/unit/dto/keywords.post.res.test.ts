import { describe, expect, it } from "vitest";
import { KeywordsPOSTResponseDTO } from "../../../shared/dtos/keywords.post.res.dto";

describe("KeywordsPOSTResponseDTOの単体テスト", () => {
	const values = {
		body: {
			id: 1,
		},
	};

	it("DTOが作成できる", () => {
		expect(() => new KeywordsPOSTResponseDTO(values)).not.toThrow();
	});
});
