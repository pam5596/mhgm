describe("AuthPublicUserSettingsGETServiceの結合テスト", () => {
	const settingRepo = new SettingRepository(prisma);
	const keywordRepo = new KeywordRepository(prisma);
	const userRepo = new UserRepository(prisma);
	const service = new AuthPublicUsersSettingsGETService(settingRepo, keywordRepo);

	withSetupDB();

	it("設定とキーワードをDBから取得してDTOを返す", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));
		await settingRepo.create(Factory.create(SettingModel, { user_id: user.values.id }));
		await keywordRepo.create(Factory.create(KeywordModel, { user_id: user.values.id }));
		await keywordRepo.create(Factory.create(KeywordModel, { user_id: user.values.id }));

		const request = new AuthPublicUsersSettingsGETRequestDTO({
			sessions: {
				user_id: user.values.id!,
			},
		});

		const result = await service.execute(request);

		expect(result.values.body.setting.quest_limit).toBeTruthy();
		expect(result.values.body.keywords).toHaveLength(2);
	}));
});
