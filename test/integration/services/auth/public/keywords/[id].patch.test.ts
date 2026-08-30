describe("AuthPublicKeywordPATCHServiceの結合テスト", () => {
	const keywordRepo = new KeywordRepository(prisma);
	const userRepo = new UserRepository(prisma);
	const service = new AuthPublicKeywords$ID$PATCHService(keywordRepo);

	withSetupDB();

	it("キーワードをDBで更新できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));
		const keyword = await keywordRepo.create(Factory.create(KeywordModel, { user_id: user.values.id }));
		const updatedKeyword = Factory.create(KeywordModel, { user_id: user.values.id });

		const request = new AuthPublicKeywordsPATCHRequestDTO({
			sessions: {
				user_id: user.values.id!,
			},
			params: {
				id: keyword.values.id!,
			},
			body: {
				keyword: updatedKeyword.values.keyword,
			},
		});

		await service.execute(request);
	}));
});
