export default defineEventHandler(async (event) => {
  const { user } = await getUserSession(event)
  const id = getRouterParam(event, 'id')

  await new DELETEKeywordService(
    keywordRepository
  ).execute(
    new KeywordsDELETERequestDTO({
      sessions: {
        user: { user_id: user!.user_id }
      },
      params: { id: Number(id) }
    })
  )
})