import { BaseService } from "./_base";
import { PrivateUsersKeywordsGETRequestDTO } from "~~/shared/dtos/private_users_keywords.get.req.dto";
import { PrivateUsersKeywordsGETResponseDTO } from "~~/shared/dtos/private_users_keywords.get.res.dto";
import { KeywordRepository } from "../repositories/keyword.repository";

export class PrivateUsersKeywordsGETService 
  implements BaseService<PrivateUsersKeywordsGETRequestDTO, PrivateUsersKeywordsGETResponseDTO>
  {
    constructor(
      private keywordsRepository: KeywordRepository
    ) {}

    async execute(request: PrivateUsersKeywordsGETRequestDTO) {
      const { user_id } = request.values.params
      
      const keywords = await this.keywordsRepository.findManyByUserId(user_id)

      return new PrivateUsersKeywordsGETResponseDTO({
        body: {
          keywords: keywords.map(k => ({
            id: k.values.id!,
            keyword: k.values.keyword,
            action: k.values.action
          }))
        }
      })
    }
  }