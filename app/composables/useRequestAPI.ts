export default function () {
  const { showAlert } = useAlert()
  const { toggleLoading } = useLoading()
  const { t } = useI18n()

  return async function requestAPI<ResT>(
    request: Parameters<typeof $fetch>[0],
    opts?: Parameters<typeof $fetch>[1] & {
      showLoading?: boolean
      loadingMessage?: string
      successMessage?: string
    }
  ): Promise<{ data: ResT | null, error: Error | null }> {
    console.debug(request)
    if (opts?.showLoading) toggleLoading()
    if (opts?.loadingMessage) showAlert({
      type: "info",
      title: opts.loadingMessage
    })

    try {
      const data = await $fetch<ResT>(request, opts)
      console.debug(data)
      if (opts?.successMessage) showAlert({
        type: "success",
        title: opts.successMessage
      })

      return { data: data ?? null, error: null }
    } catch (e) {
      const error = e as Error
      console.error(error)
      showAlert({
        type: "error",
        title: error?.message ?? t("errors.default"),
        error: error && errorToString(error)
      })
      
      return { data: null, error }
    } finally {
      if (opts?.showLoading) toggleLoading()
    }
  }
}
