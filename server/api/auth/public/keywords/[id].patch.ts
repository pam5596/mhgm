export default defineEventHandler(async(event) => {
  const { user } = await getUserSession(event)
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)

  await new AuthPublicKeywordPATCHService(
    keywordRepository
  ).execute(
    new AuthPublicKeywordsPATCHRequestDTO({
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