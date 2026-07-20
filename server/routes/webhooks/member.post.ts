export default defineEventHandler(async (event) => {
  const { user } = await getUserSession(event)
  const body = await readBody(event)

  await new POSTWebhooksMemberService(
    socketIOClient!
  ).execute(
    new WebhooksMemberPOSTRequestDTO({
      sessions: {
        user: { channel_id: user!.channel_id }
      },
      body
    })
  )
})