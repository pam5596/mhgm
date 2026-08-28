import { NotFoundError } from "../../shared/errors/not_found";
import type { AuthPublicKeywordsPATCHRequestDTO } from "../../shared/dtos/auth_public_keywords.patch.req.dto";
import { ForbiddenError } from "../../shared/errors/forbidden";
import type { KeywordRepository } from "../repositories/keyword.repository";
import type { BaseService } from "./_base";

export class AuthPublicKeywordPATCHService
	implements BaseService<AuthPublicKeywordsPATCHRequestDTO, void>
{
	constructor(private keywordRepository: KeywordRepository) {}

	async execute(request: AuthPublicKeywordsPATCHRequestDTO) {
		const user_id = BigInt(request.values.sessions.user_id);
		const id = BigInt(request.values.params.id);

		const keyword = await this.keywordRepository.findById(id);
		if (!keyword)
			throw new NotFoundError(this.constructor.name, request.values);
		if (keyword.values.user_id !== user_id)
			throw new ForbiddenError(this.constructor.name, request.values);

		await this.keywordRepository.update(
			keyword.update({
				...keyword.values,
				keyword: request.values.body.keyword,
			}),
		);
	}
}
