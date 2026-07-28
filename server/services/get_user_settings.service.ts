import { NotFoundError } from "../../shared/errors/not_found";
import type { UsersSettingsGETRequestDTO } from "../../shared/dtos/users_settings.get.req.dto";
import { UsersSettingsGETResponseDTO } from "../../shared/dtos/users_settings.get.res.dto";
import type { KeywordRepository } from "../repositories/keyword.repository";
import type { SettingRepository } from "../repositories/setting.repository";
import type { BaseService } from "./_base";

export class GetUserSettingsService
	implements
		BaseService<UsersSettingsGETRequestDTO, UsersSettingsGETResponseDTO>
{
	constructor(
		private settingRepository: SettingRepository,
		private keywordRepository: KeywordRepository,
	) {}

	async execute(request: UsersSettingsGETRequestDTO) {
		const { user_id } = request.values.sessions.user;
		const setting = await this.settingRepository.findByUserId(user_id);
		if (!setting)
			throw new NotFoundError(this.constructor.name, request.values);

		const keywords = await this.keywordRepository.findManyByUserId(user_id);

		return new UsersSettingsGETResponseDTO({
			body: {
				setting: {
					quest_limit: setting.values.quest_limit,
				},
				keywords: keywords.map((k) => ({
					id: k.values.id,
					keyword: k.values.keyword,
					action: k.values.action,
				})),
			},
		});
	}
}
