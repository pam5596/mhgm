import { describe, expect, it } from "vitest";
import { KeywordRepository } from "../../../server/repositories/keyword.repository";
import { AuthPublicKeywordPOSTService } from "../../../server/services/auth_public_keyword.post.service";
import { AuthPublicKeywordsPOSTRequestDTO } from "../../../shared/dtos/auth_public_keywords.post.req.dto";
import { create } from "../crud.util";
import { withSetupDB } from "../db.setup";
import { prisma } from "../prisma.client";

describe("AuthPublicKeywordPOSTServiceの結合テスト", () => {
	const keywordRepo = new KeywordRepository(prisma);
	const service = new AuthPublicKeywordPOSTService(keywordRepo);

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
