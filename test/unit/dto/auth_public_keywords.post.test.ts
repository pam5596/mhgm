import { describe, expect, it } from "vitest";
import { AuthPublicKeywordsPOSTRequestDTO } from "../../../shared/dtos/auth_public_keywords.post.req.dto";
import { AuthPublicKeywordsPOSTResponseDTO } from "../../../shared/dtos/auth_public_keywords.post.res.dto";

describe("AuthPublicKeywordsPOSTの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		expect(() => new AuthPublicKeywordsPOSTRequestDTO({
			sessions: {
				user_id: 1,
			},
			body: {
				keyword: "string",
				action: "CANCEL",
			},
		})).not.toThrow();
	});

	it("ResponseDTOが作成できる", () => {
		expect(() => new AuthPublicKeywordsPOSTResponseDTO({
			body: {
				id: 1,
			},
		})).not.toThrow();
	});
});
