import type { AuthPublicUsersSettingsGETResponse } from "~~/shared/dtos/interfaces/auth_public_users_settings.get.res.dto"

export default async function() {
  const { user } = useUserSession()

  const is_recruiting = ref(false)

  const { data: settings, execute: getUserSetting } = useFetchAPI<AuthPublicUsersSettingsGETResponse["body"]>("/api/auth/public/users/settings")

  const onStartRecruit = () => {
    is_recruiting.value = true
  }

  const onStopRecruit = () => {
    is_recruiting.value = false
  }

  onMounted(async () => {
    await getUserSetting()
  })

  return {
    user,
    settings,
    is_recruiting,
    onStartRecruit,
    onStopRecruit
  }
}