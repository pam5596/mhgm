describe("AuthPublicKeywordDELETEServiceの結合テスト", () => {
	const keywordRepo = new KeywordRepository(prisma);
	const userRepo = new UserRepository(prisma);
	const service = new AuthPublicKeywords$ID$DELETEService(keywordRepo);

	withSetupDB();

	it("キーワードをDBで削除できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));
		const keyword = await keywordRepo.create(Factory.create(KeywordModel, { user_id: user.values.id }));

		const request = new AuthPublicKeywordsDELETERequestDTO({
			sessions: {
				user_id: user.values.id!,
			},
			params: {
				id: keyword.values.id!,
			},
		});

		await service.execute(request);
	}));
});
