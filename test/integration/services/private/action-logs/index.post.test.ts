describe("AuthPublicActionlogsPOSTServiceの結合テスト", () => {
	const actionLogRepo = new ActionLogRepository(prisma);
	const userRepo = new UserRepository(prisma);
	const broadcastRepo = new BroadcastRepository(prisma);
	const keywordRepo = new KeywordRepository(prisma);
	const service = new AuthPublicActionlogsPOSTService(actionLogRepo);

	withSetupDB();

	it("アクションログをDBに保存してIDを返す", errorHandler(async () => {
		const user = await userRepo.create(Factory.create(UserModel));
		const broadcast = await broadcastRepo.create(Factory.create(BroadcastModel, { user_id: user.values.id }));
		const keyword = await keywordRepo.create(Factory.create(KeywordModel, { user_id: user.values.id }));
		const actionLog = Factory.create(ActionLogModel, {
			user_id: user.values.id,
			broadcast_id: broadcast.values.id,
			keyword_id: keyword.values.id,
		});

		const request = new AuthPublicActionlogsPOSTRequestDTO({
			body: {
				message: actionLog.values.message,
				user_id: user.values.id!,
				broadcast_id: broadcast.values.id!,
				keyword_id: keyword.values.id!,
			},
		});

		await service.execute(request);
	}));
});
