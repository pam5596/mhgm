export default defineApiHandler(async (event) => {
  const user_id = getRouterParam(event, 'user_id')

  const response = await new PrivateUsersKeywordsGETService(
    keywordRepository
  ).execute(
    new PrivateUsersKeywordsGETRequestDTO({ 
      params: { user_id: BigInt(user_id!) }
    })
  )

  return response.values.body
})