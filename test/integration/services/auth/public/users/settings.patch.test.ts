describe("AuthPublicUserSettingsPATCHServiceの結合テスト", () => {
	const settingRepo = new SettingRepository(prisma);
	const userRepo = new UserRepository(prisma);
	const service = new AuthPublicUsersSettingsPATCHService(settingRepo);

	withSetupDB();

	it("設定をDBに反映して更新できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));
		await settingRepo.create(Factory.create(SettingModel, { user_id: user.values.id }));
		const updatedSetting = Factory.create(SettingModel, { user_id: user.values.id });

		const request = new AuthPublicUsersSettingsPATCHRequestDTO({
			sessions: {
				user_id: user.values.id!,
			},
			body: {
				quest_limit: updatedSetting.values.quest_limit,
				player_limit: updatedSetting.values.player_limit,
			},
		});

		await service.execute(request);
	}));
});
