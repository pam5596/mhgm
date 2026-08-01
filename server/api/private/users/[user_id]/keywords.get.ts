import { PrivateUsersKeywordsGETService } from "~~/server/services/private_users_keywords.get.service"
import { PrivateUsersKeywordsGETRequestDTO } from "~~/shared/dtos/private_users_keywords.get.req.dto"

export default defineEventHandler(async (event) => {
  const user_id = getRouterParam(event, 'user_id')

  const response = await new PrivateUsersKeywordsGETService(
    keywordRepository
  ).execute(
    new PrivateUsersKeywordsGETRequestDTO({ 
      params: { user_id: Number(user_id) }
    })
  )

  return response.values.body
})