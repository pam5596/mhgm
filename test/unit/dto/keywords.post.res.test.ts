import { describe, expect, it } from "vitest";
import { AuthPublicKeywordsPOSTResponseDTO } from "../../../shared/dtos";

describe("AuthPublicKeywordsPOSTResponseDTOの単体テスト", () => {
	const values = {
		body: {
			id: 1,
		},
	};

	it("DTOが作成できる", () => {
		expect(() => new AuthPublicKeywordsPOSTResponseDTO(values)).not.toThrow();
	});
});
