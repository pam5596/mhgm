import { describe, expect, it } from "vitest";
import { BroadcastRepository } from "../../../server/repositories/broadcast.repository";
import { UserRepository } from "../../../server/repositories/user.repository";
import { withSetupDB } from "../db.setup";
import { broadcast, users } from "../fixtures.util";
import { prisma } from "../prisma.client";

describe("BroadcastRepositoryの結合テスト", () => {
	const userRepo = new UserRepository(prisma);
	const repo = new BroadcastRepository(prisma);
	withSetupDB();

	it("ブロードキャストをupsertできる", async () => {
		const user = users(1);
		await userRepo.upsert(user!);

		const broadcast_model = broadcast(1);
		const inserted = broadcast_model && (await repo.upsert(broadcast_model));

		expect(inserted?.values.id).toBeTruthy();
		expect(inserted?.values.begin_at).toBeTruthy();
		expect(inserted?.values.end_at).toBeNull();

		const updated_broadcast = broadcast(2)
		const updated = updated_broadcast && (await repo.upsert(updated_broadcast));

		expect(updated?.values.end_at?.toISOString()).toBe("2026-07-15T00:00:00.000Z");
	});

	it("ブロードキャストをstream_idで取得できる", async () => {
		const user = users(1);
		await userRepo.upsert(user!);

		const broadcast_model = broadcast(1);
		await repo.upsert(broadcast_model!);

		const finded = await repo.findByStreamId("stream_id_1");
		expect(finded?.values.stream_id).toBe("stream_id_1");
	});

	it("ブロードキャストをidで取得できる", async () => {
		const user = users(1);
		await userRepo.upsert(user!);

		const broadcast_model = broadcast(1);
		await repo.upsert(broadcast_model!);

		const finded = await repo.findById(1);
		expect(finded?.values.id).toBe(1);
	});

	it("ブロードキャストをuser_idで取得できる", async () => {
		const user = users(1);
		await userRepo.upsert(user!);

		const broadcast_model = broadcast(1);
		await repo.upsert(broadcast_model!);

		const finded = await repo.findFirstByUserId(1);
		expect(finded?.values.user_id).toBe(1);
	});

	it("ブロードキャストを削除できる", async () => {
		const user = users(1);
		await userRepo.upsert(user!);

		const broadcast_model = broadcast(1);
		const inserted = broadcast_model && (await repo.upsert(broadcast_model));
		await repo.destroyById(inserted!.values.id!);

		const finded = await repo.findByStreamId("stream_id_1");
		expect(finded).toBeNull();
	});
});
