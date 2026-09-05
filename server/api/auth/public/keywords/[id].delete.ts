export default defineApiHandler(async (event) => {
  const { user } = await getUserSession(event)
  const id = getRouterParam(event, 'id')

  await new AuthPublicKeywords$ID$DELETEService(
    keywordRepository
  ).execute(
    new AuthPublicKeywords$ID$DELETERequestDTO({
      sessions: {
        user_id: user!.user_id
      },
      params: { id: Number(id) }
    })
  )
})