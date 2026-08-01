export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const response = await new PrivateUsersPUTService(
    userRepository
  ).execute(
    new PrivateUsersPUTRequestDTO({ body })
  )

  return response.values.body
})