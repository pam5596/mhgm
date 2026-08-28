import { describe, expect, it } from "vitest";
import { AuthPublicKeywordsPOSTRequestDTO } from "../../../shared/dtos/auth_public_keywords.post.req.dto";
import { AuthPublicKeywordsPOSTResponseDTO } from "../../../shared/dtos/auth_public_keywords.post.res.dto";
import { zocker } from "zocker";

describe("AuthPublicKeywordsPOSTの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		const mock = zocker(AuthPublicKeywordsPOSTRequestDTO.schema()).generate();

		expect(() => new AuthPublicKeywordsPOSTRequestDTO(mock)).not.toThrow();
	});

	it("ResponseDTOが作成できる", () => {
		const mock = zocker(AuthPublicKeywordsPOSTResponseDTO.schema()).generate();

		expect(() => new AuthPublicKeywordsPOSTResponseDTO(mock)).not.toThrow();
	});
});
