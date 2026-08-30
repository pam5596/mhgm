export default defineApiHandler(async (event) => {
  const { secure } = await getUserSession(event)
  const body = await readBody(event)

  await new AuthPublicYoutubeChatMessagesPOSTService(
    googleClient
  ).execute(
    new AuthPublicYoutubeChatMessagesPOSTRequestDTO({
      sessions: {
        access_token: secure!.access_token
      },
      body
    })
  )
})