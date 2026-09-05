export class AuthPublicUsersSettingsGETService
	implements
		BaseService<AuthPublicUsersSettingsGETRequestDTO, AuthPublicUsersSettingsGETResponseDTO>
{
	constructor(
		private settingRepository: SettingRepository,
		private keywordRepository: KeywordRepository,
		private eventMessageRepository: EventMessageRepository
	) {}

	async execute(request: AuthPublicUsersSettingsGETRequestDTO) {
		const { user_id } = request.values.sessions;
		const setting = await this.settingRepository.findByUserId(user_id);
		if (!setting)
			throw new NotFoundError(this.constructor.name, request.values);

		const keywords = await this.keywordRepository.findManyByUserId(user_id);

		const event_message = await this.eventMessageRepository.findByUserId(user_id);
		if (!event_message)
			throw new NotFoundError(this.constructor.name, request.values);

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
				event_message: {
					id: event_message.values.id!,
					cancel: event_message.values.cancel,
					entry_as_joiner: event_message.values.entry_as_joiner,
					entry_as_waiter: event_message.values.entry_as_waiter,
					duplicate_as_joiner: event_message.values.duplicate_as_joiner,
					duplicate_as_waiter: event_message.values.duplicate_as_waiter,
				}
			},
		});
	}
}
