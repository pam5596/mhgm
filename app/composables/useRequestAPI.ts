export default function () {
  const { showAlert } = useAlert()
  const { openLoading, closeLoading } = useLoading()
  const { t } = useI18n()

  return async function requestAPI<ResT>(
    request: Parameters<typeof $fetch>[0],
    opts?: Parameters<typeof $fetch>[1] & {
      showLoading?: boolean
      loadingMessage?: string
      successMessage?: string
    }
  ) {
    return await $fetch<ResT>(request, {
      ...opts,
      onRequest: ({ request }) => {
        console.debug(request)
        if (opts?.showLoading) openLoading()
        if (opts?.loadingMessage) showAlert({ 
            type: "info", 
            title: opts.loadingMessage
          })
      },
      onRequestError: ({ error }) => {
        console.error(error)
        if (opts?.showLoading) closeLoading()
        showAlert({ 
          type: "error", 
          title: error.message,
          error: error && errorToString(error)
        })
      },
      onResponse: ({ response }) => {
        console.debug(response)
        if (opts?.showLoading) closeLoading()
        if (opts?.successMessage) showAlert({ 
          type: "success", 
          title: opts.successMessage
        })
      },
      onResponseError: ({ response }) => {
        console.error(response._data)
        const error = response._data as CustomError
        if (opts?.showLoading) closeLoading()
        showAlert({
          type: "error", 
          title: error.message || t("errors.default"),
          error: error && errorToString(error)
        })
      }
    })
  }
}
