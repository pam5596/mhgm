export default defineApiHandler((event) => {
  const config = useRuntimeConfig()

  if(
    event.path.startsWith("/api") &&
    !event.path.startsWith("/api/_auth") &&
    !event.path.startsWith("/api/_nuxt_icon") &&
    !event.path.startsWith("/api/auth/google") &&
    event.headers.get("x-api-key") !== config.apiKey
  ) {
    throw new InvalidApiKeyError(event)
  }
})