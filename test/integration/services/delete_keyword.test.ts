import { describe, expect, it } from "vitest";
import { KeywordRepository } from "../../../server/repositories/keyword.repository";
import { DELETEKeywordService } from "../../../server/services/delete_keyword.service";
import { KeywordsDELETERequestDTO } from "../../../shared/dtos/keywords.delete.req.dto";
import { create } from "../crud.util";
import { withSetupDB } from "../db.setup";
import { prisma } from "../prisma.client";

describe("DELETEKeywordServiceの結合テスト", () => {
	const keywordRepo = new KeywordRepository(prisma);
	const service = new DELETEKeywordService(keywordRepo);

	withSetupDB();

	it("キーワードをDBで削除できる", async () => {
		await create("user", 1);
		await create("keyword", 1);

		const request = new KeywordsDELETERequestDTO({
			sessions: {
				user: {
					user_id: 1,
				},
			},
			params: {
				id: 1,
			},
		});

		await service.execute(request);

		const updated = await keywordRepo.findById(1);
		expect(updated).toBeNull();
	});
});
