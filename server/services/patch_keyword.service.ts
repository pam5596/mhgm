import { KeywordsPATCHRequestDTO } from "../../shared/dtos/keywords.patch.req.dto";
import { BaseService } from "./_base";
import { KeywordRepository } from "../repositories/keyword.repository";
import { RecordNotFoundError } from "../../shared/errors/record_not_found";
import { ForbiddenError } from "../../shared/errors/forbidden";

export class PATCHKeywordService implements BaseService<
  KeywordsPATCHRequestDTO,
  void
>{
  constructor(
    private keywordRepository: KeywordRepository
  ){}

  async execute(request: KeywordsPATCHRequestDTO) {
    const { user_id } = request.values.sessions.user
    const { id } = request.values.params

    const keyword = await this.keywordRepository.findById(id)
    if (!keyword) throw new RecordNotFoundError(this.constructor.name, request.values)
    if (keyword.user_id !== user_id) throw new ForbiddenError(this.constructor.name, request.values)

    await this.keywordRepository.update(keyword)
  }
}