import { AuthPublicBroadcastsPUTResponseDTO, AuthPublicBroadcastsPUTRequestDTO } from "../../shared/dtos";
import { BroadcastModel } from "../../shared/models/broadcast.model";
import type { BroadcastRepository } from "../repositories/broadcast.repository";
import type { BaseService } from "./_base";

export class AuthPublicPUTBroadCastService
	implements BaseService<AuthPublicBroadcastsPUTRequestDTO, AuthPublicBroadcastsPUTResponseDTO>
{
	constructor(private broadcastRepository: BroadcastRepository) {}

	async execute(request: AuthPublicBroadcastsPUTRequestDTO) {
		const { user_id } = request.values.sessions
		const broadcast = await this.broadcastRepository.upsert(
			new BroadcastModel({
				...request.values.body,
				user_id
			}),
		);

		return new AuthPublicBroadcastsPUTResponseDTO({ body: { id: broadcast.values.id! } });
	}
}
