describe("UserRepositoryの結合テスト", () => {
	const repo = new UserRepository(prisma);
	withSetupDB();

	it("ユーザーをupsertできる", errorHandler(async () => {
		const inserted = await repo.upsert(Factory.create(UserModel));
		expect(inserted.values.id).toBeTruthy();
		expect(inserted.values.created_at).toBeTruthy();

		const user = Factory.create(UserModel, {
			channel_id: inserted.values.channel_id
		})
		const updated = await repo.upsert(user);
		expect(updated.values.name).toBe(user.values.name);
	}));

	it("ユーザーをidで取得できる", errorHandler(async () => {
		const inserted = await repo.upsert(Factory.create(UserModel));

		const finded = await repo.findByID(inserted.values.id!);
		expect(finded?.values.id).toBe(inserted.values.id);
	}));

	it("ユーザーをchannel_idで取得できる", errorHandler(async () => {
		const inserted = await repo.upsert(Factory.create(UserModel));

		const finded = await repo.findByChannelID(inserted.values.channel_id);
		expect(finded?.values.channel_id).toBe(inserted.values.channel_id);
	}));

	it("ユーザーを削除できる", errorHandler(async () => {
		const inserted = await repo.upsert(Factory.create(UserModel));

		await repo.destroy(inserted.values.id!);
	}));
});
