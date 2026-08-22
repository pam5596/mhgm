import type { AuthPublicKeywordsPOSTRequestDTO } from "../../shared/dtos/auth_public_keywords.post.req.dto";
import { AuthPublicKeywordsPOSTResponseDTO } from "../../shared/dtos/auth_public_keywords.post.res.dto";
import { KeywordModel } from "../../shared/models/keyword.model";
import type { KeywordRepository } from "../repositories/keyword.repository";
import type { BaseService } from "./_base";
import type { Keyword } from "../../shared/models/interfaces/keyword.interface";

export class AuthPublicKeywordPOSTService
	implements BaseService<AuthPublicKeywordsPOSTRequestDTO, AuthPublicKeywordsPOSTResponseDTO>
{
	constructor(private keywordRepository: KeywordRepository) {}

	async execute(request: AuthPublicKeywordsPOSTRequestDTO) {
		const { user_id } = request.values.sessions;
		const keyword = await this.keywordRepository.create(
			new KeywordModel({ 
				...request.values.body, 
				user_id,
				action: request.values.body.action as Keyword["action"]
			}),
		);

		return new AuthPublicKeywordsPOSTResponseDTO({
			body: {
				id: keyword.values.id!,
			},
		});
	}
}
