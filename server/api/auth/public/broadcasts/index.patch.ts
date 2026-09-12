export default defineApiHandler(async (event) => {
  const { user } = await getUserSession(event)
  const body = await readBody(event)

  const response = await new AuthPublicBroadcastsPATCHService(
    broadcastRepository
  ).execute(
    new AuthPublicBroadcastsPATCHRequestDTO({
      sessions: {
        user_id: user!.user_id
      },
      body
    })
  )

  return response.values.body
})