import { describe, expect, it } from "vitest";
import { ActionLogRepository } from "../../../server/repositories/action_log.repository";
import { BroadcastRepository } from "../../../server/repositories/broadcast.repository";
import { KeywordRepository } from "../../../server/repositories/keyword.repository";
import { PrivateActionlogsPOSTService } from "../../../server/services/private_action_logs.post.service";
import { PrivateActionlogsPOSTRequestDTO } from "../../../shared/dtos/private_action_logs.post.req.dto";
import { BroadcastModel } from "../../../shared/models/broadcast.model";
import { KeywordModel } from "../../../shared/models/keyword.model";
import { ActionLogModel } from "../../../shared/models/action_log.model";
import { UserModel } from "../../../shared/models/user.model";
import { withSetupDB } from "../db.setup";
import { errorHandler } from "../errorHandler.util";
import { Factory } from "../factory.util";
import { prisma } from "../prisma.client";
import { UserRepository } from "../../../server/repositories/user.repository";

describe("PrivateActionlogsPOSTServiceの結合テスト", () => {
	const actionLogRepo = new ActionLogRepository(prisma);
	const userRepo = new UserRepository(prisma);
	const broadcastRepo = new BroadcastRepository(prisma);
	const keywordRepo = new KeywordRepository(prisma);
	const service = new PrivateActionlogsPOSTService(actionLogRepo);

	withSetupDB();

	it("アクションログをDBに保存してIDを返す", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));
		const broadcast = await broadcastRepo.upsert(Factory.create(BroadcastModel, { user_id: user.values.id }));
		const keyword = await keywordRepo.create(Factory.create(KeywordModel, { user_id: user.values.id }));
		const actionLog = Factory.create(ActionLogModel, {
			user_id: user.values.id,
			broadcast_id: broadcast.values.id,
			keyword_id: keyword.values.id,
		});

		const request = new PrivateActionlogsPOSTRequestDTO({
			body: {
				message: actionLog.values.message,
				user_id: user.values.id!,
				broadcast_id: broadcast.values.id!,
				keyword_id: keyword.values.id!,
			},
		});

		const result = await service.execute(request);
		const saved = await prisma.actionLog.findUnique({
			where: { id: result.values.body.id },
		});

		expect(result.values.body.id).toBeTruthy();
		expect(saved?.message).toBe(actionLog.values.message);
		expect(saved?.user_id).toBe(user.values.id);
		expect(saved?.broadcast_id).toBe(broadcast.values.id);
		expect(saved?.keyword_id).toBe(keyword.values.id);
	}));
});
