export class AuthPublicBroadcastPUTService
	implements BaseService<AuthPublicBroadcastsPUTRequestDTO, AuthPublicBroadcastsPUTResponseDTO>
{
	constructor(private broadcastRepository: BroadcastRepository) {}

	async execute(request: AuthPublicBroadcastsPUTRequestDTO) {
		const { user_id } = request.values.sessions
		const broadcast = await this.broadcastRepository.upsert(
			new BroadcastModel({
				...request.values.body,
				end_at: new Date(request.values.body.end_at),
				user_id
			}),
		);

		return new AuthPublicBroadcastsPUTResponseDTO({ body: { id: broadcast.values.id! } });
	}
}
