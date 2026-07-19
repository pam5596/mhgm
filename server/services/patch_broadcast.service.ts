import { NotFoundError } from "~~/shared/errors/not_found";
import type { BroadcastsPATCHRequestDTO } from "../../shared/dtos/broadcasts.patch.req.dto";
import { ForbiddenError } from "../../shared/errors/forbidden";
import { BroadcastModel } from "../../shared/models/broadcast.model";
import type { BroadcastRepository } from "../repositories/broadcast.repository";
import type { BaseService } from "./_base";

export class PATCHBroadCastService
	implements BaseService<BroadcastsPATCHRequestDTO, void>
{
	constructor(private broadcastRepository: BroadcastRepository) {}

	async execute(request: BroadcastsPATCHRequestDTO) {
		const { user_id } = request.values.sessions.user;
		const { id } = request.values.params;

		const broadcast = await this.broadcastRepository.findById(id);
		if (!broadcast)
			throw new NotFoundError(this.constructor.name, request.values);
		if (broadcast.user_id !== user_id)
			throw new ForbiddenError(this.constructor.name, request.values);

		await this.broadcastRepository.upsert(
			broadcast.updateEndAt(request.values.body.end_at),
		);
	}
}
