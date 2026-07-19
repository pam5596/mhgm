import type { KeywordsPOSTRequestDTO } from "../../shared/dtos/keywords.post.req.dto";
import { KeywordsPOSTResponseDTO } from "../../shared/dtos/keywords.post.res.dto";
import { KeywordModel } from "../../shared/models/keyword.model";
import type { KeywordRepository } from "../repositories/keyword.repository";
import type { BaseService } from "./_base";

export class POSTKeywordService
	implements BaseService<KeywordsPOSTRequestDTO, KeywordsPOSTResponseDTO>
{
	constructor(private keywordRepository: KeywordRepository) {}

	async execute(request: KeywordsPOSTRequestDTO) {
		const { user_id } = request.values.sessions.user;
		const keyword = await this.keywordRepository.create(
			new KeywordModel({ ...request.values.body, user_id }),
		);

		return new KeywordsPOSTResponseDTO({
			body: {
				id: keyword.id,
			},
		});
	}
}
