export default defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useUserSession()
  const { showAlert } = useAlert()
  const { t } = useI18n()

  if (!loggedIn.value) {
    showAlert({ type: 'error', title: t('errors.required_login') })
    return navigateTo('/')
  }
})