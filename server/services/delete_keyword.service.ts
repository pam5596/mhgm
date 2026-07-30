import type { AuthPublicKeywordsDELETERequestDTO } from "../../shared/dtos";
import type { KeywordRepository } from "../repositories/keyword.repository";
import type { BaseService } from "./_base";

export class DELETEKeywordService
	implements BaseService<AuthPublicKeywordsDELETERequestDTO, void>
{
	constructor(private keywordRepository: KeywordRepository) {}

	async execute(request: AuthPublicKeywordsDELETERequestDTO) {
		const { user_id } = request.values.sessions;
		const { id } = request.values.params;

		const keyword = await this.keywordRepository.findById(id);
		if (!keyword)
			throw new NotFoundError(this.constructor.name, request.values);
		if (keyword.values.user_id !== user_id)
			throw new ForbiddenError(this.constructor.name, request.values);

		await this.keywordRepository.destroyById(id);
	}
}
