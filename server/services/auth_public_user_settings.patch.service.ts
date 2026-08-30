export class AuthPublicUserSettingsPATCHService
	implements BaseService<AuthPublicUsersSettingsPATCHRequestDTO, void>
{
	constructor(private settingRepository: SettingRepository) {}

	async execute(request: AuthPublicUsersSettingsPATCHRequestDTO) {
		const { user_id } = request.values.sessions;
		const setting = await this.settingRepository.findByUserId(user_id);
		if (!setting)
			throw new NotFoundError(this.constructor.name, request.values);

		await this.settingRepository.update(
			setting.update({
				...setting.values,
				...request.values.body,
			}),
		);
	}
}
