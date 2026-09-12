describe("PrivateUsersPUTServiceの結合テスト", () => {
	const userRepo = new UserRepository(prisma);
	const service = new PrivateUsersPUTService(userRepo);

	withSetupDB();

	it("ユーザーをDBに保存してIDを返す", errorHandler(async () => {
		const user = Factory.create(UserModel);
		const request = new PrivateUsersPUTRequestDTO({
			body: {
				channel_id: user.values.channel_id,
				name: user.values.name,
				avatar: user.values.avatar,
			},
		});

		const result = await service.execute(request);

		expect(result).toBeTruthy();
	}));
});
