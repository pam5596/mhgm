import { describe, expect, it } from "vitest";
import { KeywordRepository } from "../../../server/repositories/keyword.repository";
import { AuthPublicPOSTKeywordService } from "../../../server/services/auth_public_post_keyword.service";
import { AuthPublicKeywordsPOSTRequestDTO } from "../../../shared/dtos";
import { create } from "../crud.util";
import { withSetupDB } from "../db.setup";
import { prisma } from "../prisma.client";

describe("AuthPublicPOSTKeywordServiceServiceの結合テスト", () => {
	const keywordRepo = new KeywordRepository(prisma);
	const service = new AuthPublicPOSTKeywordService(keywordRepo);

	withSetupDB();

	it("キーワードをDBに保存してIDを返す", async () => {
		await create("user", 1);

		const request = new AuthPublicKeywordsPOSTRequestDTO({
			sessions: {
				user_id: 1,
			},
			body: {
				keyword: "string",
				action: "ENTRY",
			},
		});

		const result = await service.execute(request);
		expect(result.values.body.id).toBeTruthy();
	});
});
