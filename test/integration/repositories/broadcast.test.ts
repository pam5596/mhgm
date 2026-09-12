describe("BroadcastRepositoryの結合テスト", () => {
	const userRepo = new UserRepository(prisma);
	const repo = new BroadcastRepository(prisma);
	withSetupDB();

	it("ブロードキャストを作成できる", errorHandler(async () => {
		const user = await userRepo.create(Factory.create(UserModel));

		const broadcast = Factory.create(BroadcastModel, { 
			user_id: user.values.id,
			end_at: null
		})

		const created = await repo.create(broadcast);

		expect(created.values.id).toBeTruthy();
		expect(created.values.begin_at).toBeTruthy();
	}));

	it("ブロードキャストをstream_idで取得できる", errorHandler(async () => {
		const user = await userRepo.create(Factory.create(UserModel));

		const created = await repo.create(
			Factory.create(BroadcastModel, { 
				user_id: user.values.id 
			})
		);

		const finded = await repo.findByStreamId(created.values.stream_id);
		expect(finded?.values.stream_id).toBe(created.values.stream_id);
	}));

	it("ブロードキャストをidで取得できる", errorHandler(async () => {
		const user = await userRepo.create(Factory.create(UserModel));

		const created = await repo.create(
			Factory.create(BroadcastModel, { 
				user_id: user.values.id 
			})
		);

		const finded = await repo.findById(created.values.id!);
		expect(finded?.values.id).toBe(created.values.id!);
	}));

	it("ブロードキャストをuser_idで取得できる", errorHandler(async () => {
		const user = await userRepo.create(Factory.create(UserModel));

		const created = await repo.create(
			Factory.create(BroadcastModel, { 
				user_id: user.values.id 
			})
		);

		const finded = await repo.findFirstByUserId(created.values.user_id);
		expect(finded?.values.user_id).toBe(created.values.user_id);
	}));

	it("ブロードキャストを削除できる", errorHandler(async () => {
		const user = await userRepo.create(Factory.create(UserModel));

		const created = await repo.create(
			Factory.create(BroadcastModel, { 
				user_id: user.values.id 
			})
		);
		await repo.destroyById(created.values.id!);
	}));
});
