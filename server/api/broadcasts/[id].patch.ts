export default defineEventHandler(async(event) => {
  const { user } = await getUserSession(event)
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)

  await new PATCHBroadCastService(
    broadcastRepository
  ).execute(
    new BroadcastsPATCHRequestDTO({
      sessions: {
        user: { user_id: user!.user_id }
      },
      params: {
        id: Number(id)
      },
      body: {
        end_at: new Date(body.end_at)
      }
    })
  )
})