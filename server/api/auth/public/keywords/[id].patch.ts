export default defineApiHandler(async(event) => {
  const { user } = await getUserSession(event)
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)

  await new AuthPublicKeywords$ID$PATCHService(
    keywordRepository
  ).execute(
    new AuthPublicKeywords$ID$PATCHRequestDTO({
      sessions: {
        user_id: user!.user_id
      },
      params: {
        id: Number(id)
      },
      body
    })
  )
})