describe("KeywordRepositoryの結合テスト", () => {
	const userRepo = new UserRepository(prisma);
	const repo = new KeywordRepository(prisma);
	withSetupDB();

	it("キーワードを作成できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const created = await repo.create(
			Factory.create(KeywordModel, {
				user_id: user.values.id
			})
		);

		expect(created.values.id).toBeTruthy();
	}));

	it("キーワードをidで取得できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const created = await repo.create(
			Factory.create(KeywordModel, {
				user_id: user.values.id
			})
		);

		const finded = await repo.findById(created.values.id!);
		expect(finded?.values.id).toBe(created.values.id!);
	}));

	it("キーワードをuser_idで取得できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const created = await repo.create(
			Factory.create(KeywordModel, {
				user_id: user.values.id
			})
		);

		const finded = await repo.findManyByUserId(created.values.user_id!);
		expect(finded[0]?.values.user_id).toBe(created.values.user_id!);
	}));

	it("キーワードを更新できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const created = await repo.create(
			Factory.create(KeywordModel, {
				user_id: user.values.id
			})
		);

		const keyword = Factory.create(KeywordModel, {
			id: created.values.id,
			user_id: user.values.id
		})
		const updated = await repo.update(keyword);

		expect(updated.values.keyword).toBe(keyword.values.keyword);
	}));

	it("キーワードを削除できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const created = await repo.create(
			Factory.create(KeywordModel, {
				user_id: user.values.id
			})
		);
		await repo.destroyById(created.values.id!);
	}));
});
