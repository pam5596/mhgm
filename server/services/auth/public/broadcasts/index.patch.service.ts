export class AuthPublicBroadcastsPATCHService
	implements BaseService<AuthPublicBroadcastsPATCHRequestDTO, AuthPublicBroadcastsPATCHResponseDTO>
{
	constructor(private broadcastRepository: BroadcastRepository) {}

	async execute(request: AuthPublicBroadcastsPATCHRequestDTO) {
		const { user_id } = request.values.sessions
		const broadcast = await this.broadcastRepository.upsert(
			new BroadcastModel({
				...request.values.body,
				end_at: new Date(request.values.body.end_at),
				user_id
			}),
		);

		return new AuthPublicBroadcastsPATCHResponseDTO({ body: { id: broadcast.values.id! } });
	}
}
