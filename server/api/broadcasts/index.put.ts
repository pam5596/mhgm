import { PUTBroadCastService } from "~~/server/services/put_broadcast.service"
import { BroadcastsPUTRequestDTO } from "~~/shared/dtos/broadcasts.put.req.dto"

export default defineEventHandler(async (event) => {
  const { user } = await getUserSession(event)
  const body = await readBody(event)

  const response = await new PUTBroadCastService(
    broadcastRepository
  ).execute(
    new BroadcastsPUTRequestDTO({
      sessions: {
        user: { user_id: user!.user_id }
      },
      body
    })
  )

  return response.values.body
})