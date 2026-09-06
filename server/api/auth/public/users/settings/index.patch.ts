export default defineApiHandler(async (event) => {
  const { user } = await getUserSession(event)
  const body = await readBody(event)

  await new AuthPublicUsersSettingsPATCHService(
    settingRepository
  ).execute(
    new AuthPublicUsersSettingsPATCHRequestDTO({
      sessions: {
        user_id: user!.user_id
      },
      body
    })
  )
})