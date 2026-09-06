describe.skip("AuthPublicYoutubeBroadcastsGETServiceの結合テスト", async () => {
	const google = new GoogleClient();
	const userRepo = new UserRepository(prisma);
	const service = new AuthPublicYoutubeBroadcastsGETService(google);

	it("配信情報を取得できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const request = new AuthPublicYoutubeBroadcastsGETRequestDTO({
			sessions: {
				access_token: "access-token",
				user_id: user.values.id!
			},
		});

		const response = await service.execute(request);
		expect(response).toBeTruthy();
	}));
});
