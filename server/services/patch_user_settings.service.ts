import { NotFoundError } from "~~/shared/errors/not_found";
import type { UsersSettingsPATCHRequestDTO } from "../../shared/dtos/users_settings.patch.req.dto";
import type { SettingRepository } from "../repositories/setting.repository";
import type { BaseService } from "./_base";

export class PATCHUserSettingsService
	implements BaseService<UsersSettingsPATCHRequestDTO, void>
{
	constructor(private settingRepository: SettingRepository) {}

	async execute(request: UsersSettingsPATCHRequestDTO) {
		const { user_id } = request.values.sessions.user;
		const setting = await this.settingRepository.findByUserId(user_id);
		if (!setting)
			throw new NotFoundError(this.constructor.name, request.values);

		await this.settingRepository.update(setting.update(request.values.body));
	}
}
