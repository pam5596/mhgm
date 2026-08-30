import { describe, expect, it } from "vitest";
import { withSetupDB } from "../db.setup";
import { Factory } from "../factory.util";
import { prisma } from "../prisma.client";
import { errorHandler } from "../errorHandler.util"
import { SettingRepository } from "../../../server/repositories/setting.repository";
import { UserRepository } from "../../../server/repositories/user.repository";
import { UserModel } from "../../../shared/models/user.model";
import { SettingModel } from "../../../shared/models/setting.model";

describe("SettingRepositoryの結合テスト", () => {
	const userRepo = new UserRepository(prisma);
	const repo = new SettingRepository(prisma);
	withSetupDB();

	it("設定を作成できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const created = await repo.create(
			Factory.create(SettingModel, {
				user_id: user.values.id
			})
		);

		expect(created.values.updated_at!).toBeTruthy()
	}));

	it("設定をuser_idで取得できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const created = await repo.create(
			Factory.create(SettingModel, {
				user_id: user.values.id
			})
		);

		const finded = await repo.findByUserId(created.values.user_id);
		expect(finded?.values.user_id).toBe(created.values.user_id);
	}));

	it("設定を更新できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const created = await repo.create(
			Factory.create(SettingModel, {
				user_id: user.values.id
			})
		);

		const setting = Factory.create(SettingModel, {
			user_id: created.values.user_id
		})
		const updated = await repo.update(setting);

		expect(updated.values.quest_limit).toBe(setting.values.quest_limit);
		expect(updated.values.player_limit).toBe(setting.values.player_limit)
	}));

	it("設定を削除できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const created = await repo.create(
			Factory.create(SettingModel, {
				user_id: user.values.id
			})
		);
		await repo.destroyByUserId(created.values.user_id);
	}));
});
