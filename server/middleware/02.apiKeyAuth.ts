import { InvalidApiKeyError } from "~~/shared/errors/invalid_api_key"

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)

  const api_key = getHeader(event, 'x-api-key')
  if (api_key !== config.apiKey) throw new InvalidApiKeyError(api_key)
})