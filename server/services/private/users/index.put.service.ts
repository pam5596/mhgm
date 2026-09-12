export class PrivateUsersPUTService
	implements BaseService<PrivateUsersPUTRequestDTO, PrivateUsersPUTResponseDTO>
{
	constructor(private userRepository: UserRepository) {}

	async execute(request: PrivateUsersPUTRequestDTO) {
		const body = request.values.body;

		const user = await this.userRepository.findByChannelID(body.channel_id)
		
		if (user) {
			return new PrivateUsersPUTResponseDTO({ body: { id: user.values.id! } });
		} else {
			const created_user = await this.userRepository.create(new UserModel(body));
			return new PrivateUsersPUTResponseDTO({ body: { id: created_user.values.id! } });
		}		
	}
}
