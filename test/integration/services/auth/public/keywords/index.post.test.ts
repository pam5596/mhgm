describe("AuthPublicKeywordsPOSTServiceの結合テスト", () => {
	const keywordRepo = new KeywordRepository(prisma);
	const userRepo = new UserRepository(prisma);
	const service = new AuthPublicKeywordsPOSTService(keywordRepo);

	withSetupDB();

	it("キーワードをDBに保存してIDを返す", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));
		const keyword = Factory.create(KeywordModel, { user_id: user.values.id });

		const request = new AuthPublicKeywordsPOSTRequestDTO({
			sessions: {
				user_id: user.values.id!,
			},
			body: {
				keyword: keyword.values.keyword,
				action: keyword.values.action,
			},
		});

		const result = await service.execute(request);
		expect(result).toBeTruthy();
	}));
});
