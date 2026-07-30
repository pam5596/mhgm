export default defineEventHandler(async(event) => {
  const { user } = await getUserSession(event)
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)

  await new AuthPublicPATCHKeywordService(
    keywordRepository
  ).execute(
    new AuthPublicKeywordsPATCHRequestDTO({
      sessions: {
        user: { user_id: user!.user_id }
      },
      params: {
        id: Number(id)
      },
      body
    })
  )
})