import { BaseService } from "./_base";
import { UsersSettingsPATCHRequestDTO } from "../../shared/dtos/users_settings.patch.req.dto";
import { SettingRepository } from "../repositories/setting.repository";
import { RecordNotFoundError } from "../../shared/errors/record_not_found";

export class PATCHUserSettingsService implements BaseService<
  UsersSettingsPATCHRequestDTO,
  void
> {
  constructor(
    private settingRepository: SettingRepository,
  ){}

  async execute(request: UsersSettingsPATCHRequestDTO) {
    const { user_id } = request.values.sessions.user
    const setting = await this.settingRepository.findByUserId(user_id)
    if (!setting) throw new RecordNotFoundError(this.constructor.name, request.values)

    await this.settingRepository.update(
      setting.update(request.values.body)
    )
  }
}