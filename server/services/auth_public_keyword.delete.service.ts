import type { AuthPublicKeywordsDELETERequestDTO } from "../../shared/dtos/auth_public_keywords.delete.req.dto";
import type { KeywordRepository } from "../repositories/keyword.repository";
import type { BaseService } from "./_base";

export class AuthPublicKeywordDELETEService
	implements BaseService<AuthPublicKeywordsDELETERequestDTO, void>
{
	constructor(private keywordRepository: KeywordRepository) {}

	async execute(request: AuthPublicKeywordsDELETERequestDTO) {
		const user_id = BigInt(request.values.sessions.user_id);
		const id = BigInt(request.values.params.id);

		const keyword = await this.keywordRepository.findById(id);
		if (!keyword)
			throw new NotFoundError(this.constructor.name, request.values);
		if (keyword.values.user_id !== user_id)
			throw new ForbiddenError(this.constructor.name, request.values);

		await this.keywordRepository.destroyById(id);
	}
}
