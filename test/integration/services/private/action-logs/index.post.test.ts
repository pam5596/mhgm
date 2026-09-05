describe("PrivateActionlogsPOSTServiceの結合テスト", () => {
	const actionLogRepo = new ActionLogRepository(prisma);
	const userRepo = new UserRepository(prisma);
	const broadcastRepo = new BroadcastRepository(prisma);
	const keywordRepo = new KeywordRepository(prisma);
	const service = new PrivateActionlogsPOSTService(actionLogRepo);

	withSetupDB();

	it("アクションログをDBに保存してIDを返す", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));
		const broadcast = await broadcastRepo.upsert(Factory.create(BroadcastModel, { user_id: user.values.id }));
		const keyword = await keywordRepo.create(Factory.create(KeywordModel, { user_id: user.values.id }));
		const actionLog = Factory.create(ActionLogModel, {
			user_id: user.values.id,
			broadcast_id: broadcast.values.id,
			keyword_id: keyword.values.id,
		});

		const request = new PrivateActionlogsPOSTRequestDTO({
			body: {
				message: actionLog.values.message,
				user_id: user.values.id!,
				broadcast_id: broadcast.values.id!,
				keyword_id: keyword.values.id!,
			},
		});

		const result = await service.execute(request);
 
		expect(result).toBeTruthy();
	}));
});
