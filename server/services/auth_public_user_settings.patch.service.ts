import { NotFoundError } from "../../shared/errors/not_found";
import type { AuthPublicUsersSettingsPATCHRequestDTO } from "../../shared/dtos/auth_public_users_settings.patch.req.dto";
import type { SettingRepository } from "../repositories/setting.repository";
import type { BaseService } from "./_base";

export class AuthPublicUserSettingsPATCHService
	implements BaseService<AuthPublicUsersSettingsPATCHRequestDTO, void>
{
	constructor(private settingRepository: SettingRepository) {}

	async execute(request: AuthPublicUsersSettingsPATCHRequestDTO) {
		const user_id = BigInt(request.values.sessions.user_id);
		const setting = await this.settingRepository.findByUserId(user_id);
		if (!setting)
			throw new NotFoundError(this.constructor.name, request.values);

		await this.settingRepository.update(setting.update(request.values.body));
	}
}
