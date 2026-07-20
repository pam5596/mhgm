export default defineEventHandler(async (event) => {
  const { user } = await getUserSession(event)
  const body = await readBody(event)

  const response = await new POSTKeywordService(
    keywordRepository
  ).execute(
    new KeywordsPOSTRequestDTO({
      sessions: {
        user: { user_id: user!.user_id }
      },
      body
    })
  )

  return response.values.body
})