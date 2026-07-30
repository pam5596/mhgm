import { AuthPublicKeywordsPOSTResponseDTO, AuthPublicKeywordsPOSTRequestDTO } from "../../shared/dtos";
import { KeywordModel } from "../../shared/models/keyword.model";
import type { KeywordRepository } from "../repositories/keyword.repository";
import type { BaseService } from "./_base";
import type { Keyword } from "../../shared/models/interfaces/keyword.interface";

export class AuthPublicPOSTKeywordService
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
