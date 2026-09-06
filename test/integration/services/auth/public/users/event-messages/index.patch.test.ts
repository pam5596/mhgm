describe("AuthPublicUsersEventMessagesPATCHServiceの結合テスト", () => {
  const userRepo = new UserRepository(prisma);
  const eventMessageRepo = new EventMessageRepository(prisma);
  const service = new AuthPublicUsersEventMessagesPATCHService(eventMessageRepo)

  withSetupDB();

  it("イベントメッセージを更新する", errorHandler(async () => {
    const user = await userRepo.upsert(Factory.create(UserModel));
    await eventMessageRepo.create(Factory.create(EventMessageModel, { user_id: user.values.id }));

    const updated = Factory.create(EventMessageModel, { user_id: user.values.id })
    const request = new AuthPublicUsersEventMessagesPATCHRequestDTO({
      sessions: {
        user_id: user.values.id!
      },
      body: {
        entry_as_joiner: updated.values.entry_as_joiner,
        entry_as_waiter: updated.values.entry_as_waiter,
        duplicate_as_joiner: updated.values.duplicate_as_joiner,
        duplicate_as_waiter: updated.values.duplicate_as_waiter,
        cancel: updated.values.cancel
      }
    })

    await service.execute(request)
  }))
})