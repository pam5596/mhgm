import { describe, it } from "vitest";
import { KeywordRepository } from "../../../server/repositories/keyword.repository";
import { UserRepository } from "../../../server/repositories/user.repository";
import { AuthPublicKeywordDELETEService } from "../../../server/services/auth_public_keyword.delete.service";
import { AuthPublicKeywordsDELETERequestDTO } from "../../../shared/dtos/auth_public_keywords.delete.req.dto";
import { withSetupDB } from "../db.setup";
import { errorHandler } from "../errorHandler.util";
import { Factory } from "../factory.util";
import { prisma } from "../prisma.client";
import { KeywordModel } from "../../../shared/models/keyword.model";
import { UserModel } from "../../../shared/models/user.model";

describe("AuthPublicKeywordDELETEServiceの結合テスト", () => {
	const keywordRepo = new KeywordRepository(prisma);
	const userRepo = new UserRepository(prisma);
	const service = new AuthPublicKeywordDELETEService(keywordRepo);

	withSetupDB();

	it("キーワードをDBで削除できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));
		const keyword = await keywordRepo.create(Factory.create(KeywordModel, { user_id: user.values.id }));

		const request = new AuthPublicKeywordsDELETERequestDTO({
			sessions: {
				user_id: user.values.id!,
			},
			params: {
				id: keyword.values.id!,
			},
		});

		await service.execute(request);
	}));
});
