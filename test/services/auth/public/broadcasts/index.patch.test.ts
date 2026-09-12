describe("AuthPublicBroadcastsPATCHServiceの結合テスト", () => {
	const broadcastRepo = new BroadcastRepository(prisma);
	const userRepo = new UserRepository(prisma);
	const service = new AuthPublicBroadcastsPATCHService(broadcastRepo);

	withSetupDB();

	it("ブロードキャストを更新してIDを返す", errorHandler(async () => {
		const user = await userRepo.create(Factory.create(UserModel));
		const broadcast = await broadcastRepo.create(
			Factory.create(BroadcastModel, { 
				user_id: user.values.id!,
				end_at: null 
			})
		)

		const request = new AuthPublicBroadcastsPATCHRequestDTO({
			sessions: {
				user_id: user.values.id!
			},
			body: {
				id: broadcast.values.id!,
				stream_id: broadcast.values.stream_id,
				live_chat_id: broadcast.values.live_chat_id,
				title: broadcast.values.title,
				thumbnail: broadcast.values.thumbnail,
				end_at: new Date().toISOString()
			}
		});

		const result = await service.execute(request);

		expect(result).toBeTruthy();
	}));
});
