export default defineApiHandler(async (event) => {
  const { secure } = await getUserSession(event)

  const response = await new AuthPublicYoutubeBroadcastsGETService(
    googleClient
  ).execute(
    new AuthPublicYoutubeBroadcastsGETRequestDTO({
      sessions: {
        access_token: secure!.access_token
      }
    })
  )

  return response.values.body
})