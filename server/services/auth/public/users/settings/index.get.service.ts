export class AuthPublicUsersSettingsGETService
	implements
		BaseService<AuthPublicUsersSettingsGETRequestDTO, AuthPublicUsersSettingsGETResponseDTO>
{
	constructor(
		private settingRepository: SettingRepository,
		private keywordRepository: KeywordRepository,
	) {}

	async execute(request: AuthPublicUsersSettingsGETRequestDTO) {
		const { user_id } = request.values.sessions;
		const setting = await this.settingRepository.findByUserId(user_id);
		if (!setting)
			throw new NotFoundError(this.constructor.name, request.values);

		const keywords = await this.keywordRepository.findManyByUserId(user_id);

		return new AuthPublicUsersSettingsGETResponseDTO({
			body: {
				setting: {
					quest_limit: setting.values.quest_limit,
					player_limit: setting.values.player_limit
				},
				keywords: keywords.map((k) => ({
					id: k.values.id!,
					keyword: k.values.keyword,
					action: k.values.action,
				})),
			},
		});
	}
}
