export default defineApiHandler(async (event) => {
  const { user } = await getUserSession(event)

  const response = await new AuthPublicUsersSettingsGETService(
    settingRepository,
    keywordRepository,
    eventMessageRepository
  ).execute(
    new AuthPublicUsersSettingsGETRequestDTO({
      sessions: {
        user_id: user!.user_id
      }
    })
  )

  return response.values.body
})