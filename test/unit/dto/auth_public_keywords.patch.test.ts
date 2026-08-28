import { describe, expect, it } from "vitest";
import { AuthPublicKeywordsPATCHRequestDTO } from "../../../shared/dtos/auth_public_keywords.patch.req.dto";

describe("AuthPublicKeywordsPATCHRequestDTOの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		expect(() => new AuthPublicKeywordsPATCHRequestDTO({
			sessions: {
				user_id: 1,
			},
			params: {
				id: 1,
			},
			body: {
				keyword: "string",
			},
		})).not.toThrow();
	});
});
