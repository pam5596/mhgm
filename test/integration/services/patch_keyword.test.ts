import { describe, expect, it } from "vitest";
import { KeywordRepository } from "../../../server/repositories/keyword.repository";
import { PATCHKeywordService } from "../../../server/services/patch_keyword.service";
import { KeywordsPATCHRequestDTO } from "../../../shared/dtos/keywords.patch.req.dto";
import { create } from "../crud.util";
import { withSetupDB } from "../db.setup";
import { prisma } from "../prisma.client";

describe("PATCHKeywordServiceの結合テスト", () => {
	const keywordRepo = new KeywordRepository(prisma);
	const service = new PATCHKeywordService(keywordRepo);

	withSetupDB();

	it("キーワードをDBで更新できる", async () => {
		await create("user", 1);
		await create("keyword", 1);

		const request = new KeywordsPATCHRequestDTO({
			sessions: {
				user: {
					user_id: 1,
				},
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
