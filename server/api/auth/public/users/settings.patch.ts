export default defineEventHandler(async (event) => {
  const { user } = await getUserSession(event)
  const body = await readBody(event)

  await new AuthPublicPATCHUserSettingsService(
    settingRepository
  ).execute(
    new AuthPublicUsersSettingsPATCHRequestDTO({
      sessions: {
        user: { user_id: user!.user_id }
      },
      body
    })
  )
})