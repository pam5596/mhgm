import { NotFoundError } from "../../shared/errors/not_found";
import type { KeywordsPATCHRequestDTO } from "../../shared/dtos/keywords.patch.req.dto";
import { ForbiddenError } from "../../shared/errors/forbidden";
import type { KeywordRepository } from "../repositories/keyword.repository";
import type { BaseService } from "./_base";

export class PATCHKeywordService
	implements BaseService<KeywordsPATCHRequestDTO, void>
{
	constructor(private keywordRepository: KeywordRepository) {}

	async execute(request: KeywordsPATCHRequestDTO) {
		const { user_id } = request.values.sessions.user;
		const { id } = request.values.params;

		const keyword = await this.keywordRepository.findById(id);
		if (!keyword)
			throw new NotFoundError(this.constructor.name, request.values);
		if (keyword.values.user_id !== user_id)
			throw new ForbiddenError(this.constructor.name, request.values);

		await this.keywordRepository.update(
			keyword.updateKeyword(request.values.body.keyword),
		);
	}
}
