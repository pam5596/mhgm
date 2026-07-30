export default defineEventHandler(async (event) => {
  const { user } = await getUserSession(event)
  const id = getRouterParam(event, 'id')

  await new AuthPublicDELETEKeywordService(
    keywordRepository
  ).execute(
    new AuthPublicKeywordsDELETERequestDTO({
      sessions: {
        user: { user_id: user!.user_id }
      },
      params: { id: Number(id) }
    })
  )
})