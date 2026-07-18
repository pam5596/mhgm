import { KeywordsPOSTRequestDTO } from "../../shared/dtos/keywords.post.req.dto";
import { BaseService } from "./_base";
import { KeywordsPOSTResponseDTO } from "../../shared/dtos/keywords.post.res.dto";
import { KeywordRepository } from "../repositories/keyword.repository";
import { KeywordModel } from "../../shared/models/keyword.model";

export class POSTKeyword implements BaseService<
  KeywordsPOSTRequestDTO,
  KeywordsPOSTResponseDTO
>{
  constructor(
    private keywordRepository: KeywordRepository
  ){}

  async execute(request: KeywordsPOSTRequestDTO) {
    const { user_id } = request.values.sessions.user
    const keyword = await this.keywordRepository.create(
      new KeywordModel({ ...request.values.body, user_id })
    )

    return new KeywordsPOSTResponseDTO({
      body: { 
        id: keyword.id
      }
    })
  }
}