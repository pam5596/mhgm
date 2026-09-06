export default defineApiHandler(async (event) => {
  const { secure, user } = await getUserSession(event)

  const response = await new AuthPublicYoutubeBroadcastsGETService(
    googleClient,
    broadcastRepository
  ).execute(
    new AuthPublicYoutubeBroadcastsGETRequestDTO({
      sessions: {
        access_token: secure!.access_token,
        user_id: user!.user_id
      }
    })
  )

  return response.values.body
})