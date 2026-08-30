import { describe, expect, it } from "vitest";
import { withSetupDB } from "../db.setup";
import { prisma } from "../prisma.client";
import { Factory } from "../factory.util";
import { errorHandler } from "../errorHandler.util"
import { ActionLogRepository } from "../../../server/repositories/action_log.repository";
import { BroadcastRepository } from "../../../server/repositories/broadcast.repository";
import { KeywordRepository } from "../../../server/repositories/keyword.repository";
import { UserRepository } from "../../../server/repositories/user.repository";
import { UserModel } from "../../../shared/models/user.model";
import { BroadcastModel } from "../../../shared/models/broadcast.model";
import { KeywordModel } from "../../../shared/models/keyword.model";
import { ActionLogModel } from "../../../shared/models/action_log.model";


describe("ActionLogRepositoryの結合テスト", () => {
	const userRepo = new UserRepository(prisma);
	const broadcastRepo = new BroadcastRepository(prisma);
	const keywordRepo = new KeywordRepository(prisma);
	const repo = new ActionLogRepository(prisma);
	withSetupDB();

	it("アクションログを作成できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const broadcast = await broadcastRepo.upsert(
			Factory.create(BroadcastModel, { 
				user_id: user.values.id 
			})
		);

		const keyword = await keywordRepo.create(
			Factory.create(KeywordModel, { 
				user_id: user.values.id 
			})
		);

		const action_log = Factory.create(ActionLogModel, { 
			user_id: user.values.id, 
			broadcast_id: broadcast.values.id,
			keyword_id: keyword.values.id
		})
		const created = await repo.create(action_log);

		expect(created.values.id).toBeTruthy();
		expect(created.values.created_at).toBeTruthy();
	}));

	it("アクションログを削除できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const broadcast = await broadcastRepo.upsert(
			Factory.create(BroadcastModel, { 
				user_id: user.values.id 
			})
		);

		const keyword = await keywordRepo.create(
			Factory.create(KeywordModel, { 
				user_id: user.values.id 
			})
		);

		const action_log = Factory.create(ActionLogModel, { 
			user_id: user.values.id, 
			broadcast_id: broadcast.values.id,
			keyword_id: keyword.values.id
		})
		const created = await repo.create(action_log);

		await repo.destroyById(created.values.id!);
	}));
});
