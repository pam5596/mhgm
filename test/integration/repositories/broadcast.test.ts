describe("BroadcastRepositoryの結合テスト", () => {
	const userRepo = new UserRepository(prisma);
	const repo = new BroadcastRepository(prisma);
	withSetupDB();

	it("ブロードキャストをupsertできる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const inserted = await repo.upsert(
			Factory.create(BroadcastModel, { 
				user_id: user.values.id,
				end_at: null
			})
		);

		expect(inserted.values.id).toBeTruthy();
		expect(inserted.values.begin_at).toBeTruthy();
		expect(inserted.values.end_at).toBeNull();

		const broadcast = Factory.create(BroadcastModel, { 
			user_id: user.values.id,
			stream_id: inserted.values.stream_id,
		})
		const updated = await repo.upsert(broadcast);

		expect(updated.values.end_at).toStrictEqual(broadcast.values.end_at);
	}));

	it("ブロードキャストをstream_idで取得できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const inserted = await repo.upsert(
			Factory.create(BroadcastModel, { 
				user_id: user.values.id 
			})
		);

		const finded = await repo.findByStreamId(inserted.values.stream_id);
		expect(finded?.values.stream_id).toBe(inserted.values.stream_id);
	}));

	it("ブロードキャストをidで取得できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const inserted = await repo.upsert(
			Factory.create(BroadcastModel, { 
				user_id: user.values.id 
			})
		);

		const finded = await repo.findById(inserted.values.id!);
		expect(finded?.values.id).toBe(inserted.values.id!);
	}));

	it("ブロードキャストをuser_idで取得できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const inserted = await repo.upsert(
			Factory.create(BroadcastModel, { 
				user_id: user.values.id 
			})
		);

		const finded = await repo.findFirstByUserId(inserted.values.user_id);
		expect(finded?.values.user_id).toBe(inserted.values.user_id);
	}));

	it("ブロードキャストを削除できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));

		const inserted = await repo.upsert(
			Factory.create(BroadcastModel, { 
				user_id: user.values.id 
			})
		);
		await repo.destroyById(inserted.values.id!);
	}));
});
