import { describe, expect, it } from "vitest";
import { KeywordRepository } from "../../../server/repositories/keyword.repository";
import { UserRepository } from "../../../server/repositories/user.repository";
import { AuthPublicKeywordPOSTService } from "../../../server/services/auth_public_keyword.post.service";
import { AuthPublicKeywordsPOSTRequestDTO } from "../../../shared/dtos/auth_public_keywords.post.req.dto";
import { withSetupDB } from "../db.setup";
import { errorHandler } from "../errorHandler.util";
import { Factory } from "../factory.util";
import { prisma } from "../prisma.client";
import { KeywordModel } from "../../../shared/models/keyword.model";
import { UserModel } from "../../../shared/models/user.model";

describe("AuthPublicKeywordPOSTServiceの結合テスト", () => {
	const keywordRepo = new KeywordRepository(prisma);
	const userRepo = new UserRepository(prisma);
	const service = new AuthPublicKeywordPOSTService(keywordRepo);

	withSetupDB();

	it("キーワードをDBに保存してIDを返す", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));
		const keyword = Factory.create(KeywordModel, { user_id: user.values.id });

		const request = new AuthPublicKeywordsPOSTRequestDTO({
			sessions: {
				user_id: user.values.id!,
			},
			body: {
				keyword: keyword.values.keyword,
				action: keyword.values.action,
			},
		});

		const result = await service.execute(request);
		expect(result.values.body.id).toBeTruthy();
	}));
});
