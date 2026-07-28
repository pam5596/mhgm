import { describe, expect, it } from "vitest";
import { ActionLogRepository } from "../../../server/repositories/action_log.repository";
import { BroadcastRepository } from "../../../server/repositories/broadcast.repository";
import { KeywordRepository } from "../../../server/repositories/keyword.repository";
import { UserRepository } from "../../../server/repositories/user.repository";
import { withSetupDB } from "../db.setup";
import { action_log, broadcast, keywords, users } from "../fixtures.util";
import { prisma } from "../prisma.client";

describe("ActionLogRepositoryの結合テスト", () => {
	const userRepo = new UserRepository(prisma);
	const broadcastRepo = new BroadcastRepository(prisma);
	const keywordRepo = new KeywordRepository(prisma);
	const repo = new ActionLogRepository(prisma);
	withSetupDB();

	it("アクションログを作成できる", async () => {
		const user = users(1);
		await userRepo.upsert(user!);

		const broadcast_model = broadcast(1);
		await broadcastRepo.upsert(broadcast_model!);

		const keyword_model = keywords(1);
		await keywordRepo.create(keyword_model!);

		const action_log_model = action_log(1);
		const created = action_log_model && (await repo.create(action_log_model));

		expect(created?.values.id).toBeTruthy();
		expect(created?.values.created_at).toBeTruthy();
		expect(created?.values.message).toBe("message");
	});

	it("アクションログを削除できる", async () => {
		const user = users(1);
		await userRepo.upsert(user!);

		const broadcast_model = broadcast(1);
		await broadcastRepo.upsert(broadcast_model!);

		const keyword_model = keywords(1);
		await keywordRepo.create(keyword_model!);

		const action_log_model = action_log(1);
		const created = action_log_model && (await repo.create(action_log_model));
		await repo.destroyById(created!.values.id!);

		const deleted =
			created?.values.id &&
			(await prisma.actionLog.findUnique({
				where: { id: created.values.id },
			}));
		expect(deleted).toBeNull();
	});
});
