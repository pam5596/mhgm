import { BaseService } from "./_base";
import { UsersSettingsGETResponseDTO } from "../../shared/dtos/users_settings.get.res.dto";
import { UsersSettingsGETRequestDTO } from "../../shared/dtos/users_settings.get.req.dto";
import { SettingRepository } from "../repositories/setting.repository";
import { KeywordRepository } from "../repositories/keyword.repository";
import { RecordNotFoundError } from "../../shared/errors/record_not_found";

export class GetUserSettingsService implements BaseService<
  UsersSettingsGETRequestDTO,
  UsersSettingsGETResponseDTO
> {
  constructor(
    private settingRepository: SettingRepository,
    private keywordRepository: KeywordRepository
  ){}

  async execute(request: UsersSettingsGETRequestDTO) {
    const { user_id } = request.values.sessions.user
    const setting = await this.settingRepository.findByUserId(user_id);
    if (!setting) throw new RecordNotFoundError(this.constructor.name, request.values)

    const keywords = await this.keywordRepository.findManyByUserId(user_id)

    return new UsersSettingsGETResponseDTO({
      body: {
        setting: {
          quest_limit: setting.quest_limit
        },
        keywords: keywords.map(k => ({
          id: k.id,
          keyword: k.keyword,
          action: k.action
        }))
      }
    })
  }
}