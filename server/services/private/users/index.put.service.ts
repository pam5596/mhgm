export class PrivateUsersPUTService
	implements BaseService<PrivateUsersPUTRequestDTO, PrivateUsersPUTResponseDTO>
{
	constructor(private userRepository: UserRepository) {}

	async execute(request: PrivateUsersPUTRequestDTO) {
		const body = request.values.body;

		const user = await this.userRepository.upsert(new UserModel(body));

		return new PrivateUsersPUTResponseDTO({ body: { id: user.values.id! } });
	}
}
