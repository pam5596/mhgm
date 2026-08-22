export default function () {
  const { t } = useI18n()
  const { showAlert } = useAlert()

  return async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      showAlert({
        type: "success",
        title: t("pages.manager.alert.success_copy")
      })
    } catch {
      showAlert({
        type: "error",
        title: t("errors.faild_to_copy")
      })
    }
  }
}