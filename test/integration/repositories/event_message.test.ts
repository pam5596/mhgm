describe("EventMessageRepositoryの結合テスト", () => {
	const userRepo = new UserRepository(prisma);
	const repo = new EventMessageRepository(prisma);
	withSetupDB();

	it("イベントメッセージを作成できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const created = await repo.create(
			Factory.create(EventMessageModel, {
				user_id: user.values.id
			})
		);

		expect(created.values.updated_at!).toBeTruthy()
	}));

	it("イベントメッセージをuser_idで取得できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const created = await repo.create(
			Factory.create(EventMessageModel, {
				user_id: user.values.id
			})
		);

		const finded = await repo.findByUserId(created.values.user_id);
		expect(finded?.values.user_id).toBe(created.values.user_id);
	}));

	it("イベントメッセージを更新できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const created = await repo.create(
			Factory.create(EventMessageModel, {
				user_id: user.values.id
			})
		);

		const event_message = Factory.create(EventMessageModel, {
			user_id: created.values.user_id
		})
		const updated = await repo.update(event_message);

		expect(updated.values.entry_as_joiner).toBe(event_message.values.entry_as_joiner);
		expect(updated.values.entry_as_waiter).toBe(event_message.values.entry_as_waiter);
    expect(updated.values.cancel).toBe(event_message.values.cancel);
  }));

	it("イベントメッセージを削除できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const created = await repo.create(
			Factory.create(EventMessageModel, {
				user_id: user.values.id
			})
		);
		await repo.destroyByUserId(created.values.user_id);
	}));
});
