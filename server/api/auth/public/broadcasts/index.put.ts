export default defineEventHandler(async (event) => {
  const { user } = await getUserSession(event)
  const body = await readBody(event)

  const response = await new AuthPublicPUTBroadCastService(
    broadcastRepository
  ).execute(
    new AuthPublicBroadcastsPUTRequestDTO({
      sessions: {
        user: { user_id: user!.user_id }
      },
      body
    })
  )

  return response.values.body
})