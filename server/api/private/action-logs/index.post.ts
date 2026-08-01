export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const response = await new PrivateActionlogsPOSTService(
    actionLogRepository
  ).execute(
    new PrivateActionlogsPOSTRequestDTO({ body })
  )

  return response.values.body
})
