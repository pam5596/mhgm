import { KeywordsDELETERequestDTO } from "../../shared/dtos/keywords.delete.req.dto";
import { BaseService } from "./_base";
import { KeywordRepository } from "../repositories/keyword.repository";

export class DELETEKeyword implements BaseService<
  KeywordsDELETERequestDTO,
  void
>{
  constructor(
    private keywordRepository: KeywordRepository
  ){}

  async execute(request: KeywordsDELETERequestDTO) {
    const { user_id } = request.values.sessions.user
    const { id } = request.values.params

    const keyword = await this.keywordRepository.findById(id)
    if (!keyword) throw new RecordNotFoundError(this.constructor.name, request.values)
    if (keyword.user_id !== user_id) throw new ForbiddenError(this.constructor.name, request.values)

    await this.keywordRepository.destroyById(id)
  }
}