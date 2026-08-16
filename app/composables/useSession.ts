export default function() {
  const { loggedIn, ...signatures } = useUserSession()
  const { showAlert } = useAlert()

  if (!loggedIn) {
    navigateTo("/")
    showAlert({ type: "error", title: $t("errors.required_login")})
  }

  return { loggedIn, ...signatures }
}