export default defineEventHandler(async (event) => {
  const { user } = await getUserSession(event)
  const body = await readBody(event)

  const response = await new AuthPublicPOSTKeywordService(
    keywordRepository
  ).execute(
    new AuthPublicKeywordsPOSTRequestDTO({
      sessions: {
        user: { user_id: user!.user_id }
      },
      body
    })
  )

  return response.values.body
})