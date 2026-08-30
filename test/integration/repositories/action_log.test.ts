describe("ActionLogRepositoryの結合テスト", () => {
	const userRepo = new UserRepository(prisma);
	const broadcastRepo = new BroadcastRepository(prisma);
	const keywordRepo = new KeywordRepository(prisma);
	const repo = new ActionLogRepository(prisma);
	withSetupDB();

	it("アクションログを作成できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const broadcast = await broadcastRepo.upsert(
			Factory.create(BroadcastModel, { 
				user_id: user.values.id 
			})
		);

		const keyword = await keywordRepo.create(
			Factory.create(KeywordModel, { 
				user_id: user.values.id 
			})
		);

		const action_log = Factory.create(ActionLogModel, { 
			user_id: user.values.id, 
			broadcast_id: broadcast.values.id,
			keyword_id: keyword.values.id
		})
		const created = await repo.create(action_log);

		expect(created.values.id).toBeTruthy();
		expect(created.values.created_at).toBeTruthy();
	}));

	it("アクションログを削除できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const broadcast = await broadcastRepo.upsert(
			Factory.create(BroadcastModel, { 
				user_id: user.values.id 
			})
		);

		const keyword = await keywordRepo.create(
			Factory.create(KeywordModel, { 
				user_id: user.values.id 
			})
		);

		const action_log = Factory.create(ActionLogModel, { 
			user_id: user.values.id, 
			broadcast_id: broadcast.values.id,
			keyword_id: keyword.values.id
		})
		const created = await repo.create(action_log);

		await repo.destroyById(created.values.id!);
	}));
});
