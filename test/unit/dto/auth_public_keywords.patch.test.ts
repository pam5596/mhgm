import { describe, expect, it } from "vitest";
import { AuthPublicKeywordsPATCHRequestDTO } from "../../../shared/dtos/auth_public_keywords.patch.req.dto";
import { zocker } from "zocker";

describe("AuthPublicKeywordsPATCHRequestDTOの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		const mock = zocker(AuthPublicKeywordsPATCHRequestDTO.schema()).generate();

		expect(() => new AuthPublicKeywordsPATCHRequestDTO(mock)).not.toThrow();
	});
});
