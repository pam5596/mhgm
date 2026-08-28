import { describe, expect, it } from "vitest";
import { AuthPublicKeywordsDELETERequestDTO } from "../../../shared/dtos/auth_public_keywords.delete.req.dto";

describe("AuthPublicKeywordsDELETERequestDTOの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		expect(() => new AuthPublicKeywordsDELETERequestDTO({
			sessions: {
				user_id: 1,
			},
			params: {
				id: 1,
			},
		})).not.toThrow();
	});
});
