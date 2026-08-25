import { describe, expect, it } from "vitest";
import { SettingRepository } from "../../../server/repositories/setting.repository";
import { UserRepository } from "../../../server/repositories/user.repository";
import { withSetupDB } from "../db.setup";
import { settings, users } from "../fixtures.util";
import { prisma } from "../prisma.client";

describe("SettingRepositoryの結合テスト", () => {
	const userRepo = new UserRepository(prisma);
	const repo = new SettingRepository(prisma);
	withSetupDB();

	it("設定を作成できる", async () => {
		const user = users(1);
		await userRepo.upsert(user!);

		const setting = settings(1);
		const created = setting && (await repo.create(setting));

		expect(created?.values.user_id).toBe(1);
		expect(created?.values.quest_limit).toBe(1);
	});

	it("設定をuser_idで取得できる", async () => {
		const user = users(1);
		await userRepo.upsert(user!);

		const setting = settings(1);
		await repo.create(setting!);

		const finded = await repo.findByUserId(1);
		expect(finded?.values.user_id).toBe(1);
	});

	it("設定を更新できる", async () => {
		const user = users(1);
		await userRepo.upsert(user!);

		const setting = settings(1);
		await repo.create(setting!);

		const updated_setting = setting?.update({ quest_limit: 5, player_limit: 2 });
		const updated = updated_setting && (await repo.update(updated_setting));

		expect(updated?.values.quest_limit).toBe(5);
		expect(updated?.values.player_limit).toBe(2)
	});

	it("設定を削除できる", async () => {
		const user = users(1);
		await userRepo.upsert(user!);

		const setting = settings(1);
		await repo.create(setting!);
		await repo.destroyByUserId(1);

		const finded = await repo.findByUserId(1);
		expect(finded).toBeNull();
	});
});
