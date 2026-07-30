export default defineEventHandler(async (event) => {
  const { secure } = await getUserSession(event)

  const response = await new GetYoutubeBroadcastService(
    googleClient
  ).execute(
    new AuthPublicYoutubeBroadcastsGETRequestDTO({
      sessions: {
        secure: { access_token: secure!.access_token }
      }
    })
  )

  return response.values.body
})