export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)

  const api_key = getHeader(event, 'x-api-key')
  if (api_key !== config.apiKey && event.path.startsWith('/api')) throw new InvalidApiKeyError(api_key)
})