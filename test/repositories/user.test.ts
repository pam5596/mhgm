describe("UserRepositoryの結合テスト", () => {
	const repo = new UserRepository(prisma);
	withSetupDB();

	it("ユーザーを作成できる", errorHandler(async () => {
		const created = await repo.create(Factory.create(UserModel));

		expect(created.values.id).toBeTruthy();
		expect(created.values.created_at).toBeTruthy();
	}));

	it("ユーザーをidで取得できる", errorHandler(async () => {
		const created = await repo.create(Factory.create(UserModel));

		const finded = await repo.findByID(created.values.id!);
		expect(finded?.values.id).toBe(created.values.id);
	}));

	it("ユーザーをchannel_idで取得できる", errorHandler(async () => {
		const created = await repo.create(Factory.create(UserModel));

		const finded = await repo.findByChannelID(created.values.channel_id);
		expect(finded?.values.channel_id).toBe(created.values.channel_id);
	}));

	it("ユーザーを更新できる", errorHandler(async () => {
		const created = await repo.create(Factory.create(UserModel));

		const user = Factory.create(UserModel, {
			channel_id: created.values.channel_id
		})

		const updated = await repo.update(user)

		expect(updated.values.name).toBe(user.values.name)
		expect(updated.values.avatar).toBe(user.values.avatar)
	}))

	it("ユーザーを削除できる", errorHandler(async () => {
		const created = await repo.create(Factory.create(UserModel));

		await repo.destroy(created.values.id!);
	}));
});
