import { describe, expect, it } from "vitest";
import { KeywordRepository } from "../../../server/repositories/keyword.repository";
import { AuthPublicKeywordDELETEService } from "../../../server/services/auth_public_keyword.delete.service";
import { AuthPublicKeywordsDELETERequestDTO } from "../../../shared/dtos/auth_public_keywords.delete.req.dto";
import { create } from "../crud.util";
import { withSetupDB } from "../db.setup";
import { prisma } from "../prisma.client";

describe("AuthPublicKeywordDELETEServiceの結合テスト", () => {
	const keywordRepo = new KeywordRepository(prisma);
	const service = new AuthPublicKeywordDELETEService(keywordRepo);

	withSetupDB();

	it("キーワードをDBで削除できる", async () => {
		await create("user", 1);
		await create("keyword", 1);

		const request = new AuthPublicKeywordsDELETERequestDTO({
			sessions: {
				user_id: 1,
			},
			params: {
				id: 1,
			},
		});

		try {
			await service.execute(request);
		} catch(e) {
			console.log(e)
		}

		const updated = await keywordRepo.findById(1);
		expect(updated).toBeNull();
	});
});
