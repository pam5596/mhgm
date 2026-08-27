import { describe, expect, it } from "vitest";
import { KeywordRepository } from "../../../server/repositories/keyword.repository";
import { UserRepository } from "../../../server/repositories/user.repository";
import { withSetupDB } from "../db.setup";
import { keywords, users } from "../fixtures.util";
import { prisma } from "../prisma.client";

describe("KeywordRepositoryの結合テスト", () => {
	const userRepo = new UserRepository(prisma);
	const repo = new KeywordRepository(prisma);
	withSetupDB();

	it("キーワードを作成できる", async () => {
		const user = users(1);
		await userRepo.upsert(user!);

		const keyword = keywords(1);
		const created = keyword && (await repo.create(keyword));

		expect(created?.values.id).toBeTruthy();
		expect(created?.values.keyword).toBe("keyword");
	});

	it("キーワードをidで取得できる", async () => {
		const user = users(1);
		await userRepo.upsert(user!);

		const keyword = keywords(1);
		await repo.create(keyword!);

		const finded = await repo.findById(1);
		expect(finded?.values.id).toBe(1);
	});

	it("キーワードをuser_idで取得できる", async () => {
		const user = users(1);
		await userRepo.upsert(user!);

		const keyword = keywords(1);
		await repo.create(keyword!);

		const finded = await repo.findManyByUserId(1);
		expect(finded[0]?.values.user_id).toBe(1);
		expect(finded[0]?.values.keyword).toBe("keyword");
	});

	it("キーワードを更新できる", async () => {
		const user = users(1);
		await userRepo.upsert(user!);

		const keyword = keywords(1);
		const created = keyword && (await repo.create(keyword));

		const updated_keyword = created?.update("updated");
		const updated = updated_keyword && (await repo.update(updated_keyword));

		expect(updated?.values.keyword).toBe("updated");
	});

	it("キーワードを削除できる", async () => {
		const user = users(1);
		await userRepo.upsert(user!);

		const keyword = keywords(1);
		const created = keyword && (await repo.create(keyword));
		await repo.destroyById(created!.values.id!);

		const finded = await repo.findManyByUserId(1);
		expect(finded).toHaveLength(0);
	});
});
