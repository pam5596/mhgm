import { describe, expect, it } from "vitest";
import { AuthPublicKeywordsDELETERequestDTO } from "../../../shared/dtos";

describe("AuthPublicKeywordsDELETERequestDTOの単体テスト", () => {
	const values = {
		sessions: {
			user_id: 1,
		},
		params: {
			id: "1",
		},
	};

	it("DTOが作成できる", () => {
		expect(() => new AuthPublicKeywordsDELETERequestDTO(values)).not.toThrow();
	});
});
