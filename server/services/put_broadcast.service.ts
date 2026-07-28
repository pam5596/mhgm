import type { BroadcastsPUTRequestDTO } from "../../shared/dtos/broadcasts.put.req.dto";
import { BroadcastsPUTResponseDTO } from "../../shared/dtos/broadcasts.put.res.dto";
import { BroadcastModel } from "../../shared/models/broadcast.model";
import type { BroadcastRepository } from "../repositories/broadcast.repository";
import type { BaseService } from "./_base";

export class PUTBroadCastService
	implements BaseService<BroadcastsPUTRequestDTO, BroadcastsPUTResponseDTO>
{
	constructor(private broadcastRepository: BroadcastRepository) {}

	async execute(request: BroadcastsPUTRequestDTO) {
		const { user_id } = request.values.sessions.user;
		const broadcast = await this.broadcastRepository.upsert(
			new BroadcastModel({
				...request.values.body,
				user_id,
				end_at: null,
			}),
		);

		return new BroadcastsPUTResponseDTO({ body: { id: broadcast.values.id } });
	}
}
