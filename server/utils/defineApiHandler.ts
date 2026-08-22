export default function defineApiHandler(handler: Parameters<typeof defineEventHandler>[0]) {
  return defineEventHandler(async (event) => {
    try {
      return await handler(event)
    } catch (e) {
      const t = await useTranslation(event)
      if (e instanceof BaseError) {
        setResponseStatus(event, e.status_code)
        return {
          ...e.toJson(),
          message: t(e.message)
        }
      } else {
        const unknown_error = new UnknownError(e, 'defineApiHandler')
        setResponseStatus(event, unknown_error.status_code)
        return {
          ...unknown_error.toJson(),
          message: t(unknown_error.message)
        }
      }
    }
  })
}