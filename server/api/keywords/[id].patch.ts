import { PATCHKeywordService } from "~~/server/services/patch_keyword.service"
import { KeywordsPATCHRequestDTO } from "~~/shared/dtos/keywords.patch.req.dto"

export default defineEventHandler(async(event) => {
  const { user } = await getUserSession(event)
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)

  await new PATCHKeywordService(
    keywordRepository
  ).execute(
    new KeywordsPATCHRequestDTO({
      sessions: {
        user: { user_id: user!.user_id }
      },
      params: {
        id: Number(id)
      },
      body
    })
  )
})