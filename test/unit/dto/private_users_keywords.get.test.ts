import { describe, expect, it } from "vitest";
import { PrivateUsersKeywordsGETRequestDTO } from "../../../shared/dtos/private_users_keywords.get.req.dto";
import { PrivateUsersKeywordsGETResponseDTO } from "../../../shared/dtos/private_users_keywords.get.res.dto";

describe("PrivateUsersKeywordsGETの単体テスト", () => {
	it("RequestDTOが作成できる", () => {
		expect(() => new PrivateUsersKeywordsGETRequestDTO({
			params: {
				user_id: 1,
			},
		})).not.toThrow();
	});

	it("ResponseDTOが作成できる", () => {
		expect(() => new PrivateUsersKeywordsGETResponseDTO({
			body: {
				keywords: [
					{
						id: 1,
						keyword: "string",
						action: "ENTRY",
					},
					{
						id: 2,
						keyword: "string",
						action: "CANCEL",
					},
				],
			},
		})).not.toThrow();
	});
});
