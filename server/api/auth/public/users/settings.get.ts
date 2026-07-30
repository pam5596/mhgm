export default defineEventHandler(async (event) => {
  const { user } = await getUserSession(event)

  const response = await new AuthPublicGetUserSettingsService(
    settingRepository,
    keywordRepository
  ).execute(
    new AuthPublicUsersSettingsGETRequestDTO({
      sessions: {
        user: { user_id: user!.user_id }
      }
    })
  )

  return response.values.body
})