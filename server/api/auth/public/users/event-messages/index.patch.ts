export default defineApiHandler(async (event) => {
  const { user } = await getUserSession(event)
  const body = await readBody(event)

  await new AuthPublicUsersEventMessagesPATCHService(
    eventMessageRepository
  ).execute(
    new AuthPublicUsersEventMessagesPATCHRequestDTO({
      sessions: {
        user_id: user!.user_id
      },
      body
    })
  )
})