describe("AuthPublicBroadcastPUTServiceの結合テスト", () => {
	const broadcastRepo = new BroadcastRepository(prisma);
	const userRepo = new UserRepository(prisma);
	const service = new AuthPublicBroadcastPUTService(broadcastRepo);

	withSetupDB();

	it("ブロードキャストをDBに保存してIDを返す", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));
		const broadcast = Factory.create(BroadcastModel, { end_at: new Date() })

		const request = new AuthPublicBroadcastsPUTRequestDTO({
			sessions: {
				user_id: user.values.id!
			},
			body: {
				stream_id: broadcast.values.stream_id,
				live_chat_id: broadcast.values.live_chat_id,
				title: broadcast.values.title,
				thumbnail: broadcast.values.thumbnail,
				end_at: broadcast.values.end_at!.toISOString()
			}
		});

		const result = await service.execute(request);

		expect(result.values.body.id).toBeTruthy();
	}));
});
