import { describe, expect, it } from "vitest";
import { KeywordRepository } from "../../../server/repositories/keyword.repository";
import { AuthPublicPATCHKeywordService } from "../../../server/services/auth_public_patch_keyword.service";
import { AuthPublicKeywordsPATCHRequestDTO } from "../../../shared/dtos";
import { create } from "../crud.util";
import { withSetupDB } from "../db.setup";
import { prisma } from "../prisma.client";

describe("AuthPublicPATCHKeywordServiceの結合テスト", () => {
	const keywordRepo = new KeywordRepository(prisma);
	const service = new AuthPublicPATCHKeywordService(keywordRepo);

	withSetupDB();

	it("キーワードをDBで更新できる", async () => {
		await create("user", 1);
		await create("keyword", 1);

		const request = new AuthPublicKeywordsPATCHRequestDTO({
			sessions: {
				user_id: 1,
			},
			params: {
				id: 1,
			},
			body: {
				keyword: "updated",
			},
		});

		await service.execute(request);

		const updated = await keywordRepo.findById(1);
		expect(updated?.values.keyword).toBe("updated");
	});
});
