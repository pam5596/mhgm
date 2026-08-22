export default function () {
  const { t } = useI18n()
  const { showAlert } = useAlert()

  return async (text: string, success_message: string) => {
    try {
      await navigator.clipboard.writeText(text)
      showAlert({
        type: "success",
        title: success_message
      })
    } catch (e) {
      showAlert({
        type: "error",
        title: t("errors.faild_to_copy")
      })
    }
  }
}