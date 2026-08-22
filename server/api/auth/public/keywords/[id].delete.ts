export default defineApiHandler(async (event) => {
  const { user } = await getUserSession(event)
  const id = getRouterParam(event, 'id')

  await new AuthPublicKeywordDELETEService(
    keywordRepository
  ).execute(
    new AuthPublicKeywordsDELETERequestDTO({
      sessions: {
        user_id: user!.user_id
      },
      params: { id: Number(id) }
    })
  )
})