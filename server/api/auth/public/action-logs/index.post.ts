export default defineApiHandler(async (event) => {
  const body = await readBody(event)

  await new AuthPublicActionlogsPOSTService(
    actionLogRepository
  ).execute(
    new AuthPublicActionlogsPOSTRequestDTO({ body })
  )
})
