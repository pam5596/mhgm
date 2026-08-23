export default defineApiHandler((event) => {
  const config = useRuntimeConfig()

  if(event.path.startsWith("/api") && event.headers.get("x-api-key") !== config.apiKey) {
    throw new InvalidApiKeyError(event)
  }
})