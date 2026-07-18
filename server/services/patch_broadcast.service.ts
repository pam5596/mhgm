import { BaseService } from "./_base";
import { BroadcastsPATCHRequestDTO } from "../../shared/dtos/broadcasts.patch.req.dto";
import { BroadcastRepository } from "../repositories/broadcast.repository";
import { BroadcastModel } from "../../shared/models/broadcast.model";
import { RecordNotFoundError } from "../../shared/errors/record_not_found";
import { ForbiddenError } from "../../shared/errors/forbidden";

export class PATCHBroadCastService implements BaseService<
  BroadcastsPATCHRequestDTO,
  void
> {
  constructor(
    private broadcastRepository: BroadcastRepository
  ) {}

  async execute(request: BroadcastsPATCHRequestDTO) {
    const { user_id } = request.values.sessions.user
    const { id } = request.values.params

    const broadcast = await this.broadcastRepository.findById(id)
    if (!broadcast) throw new RecordNotFoundError(this.constructor.name, request.values)
    if (broadcast.user_id !== user_id) throw new ForbiddenError(this.constructor.name, request.values)
    

    await this.broadcastRepository.upsert(
      broadcast.updateEndAt(request.values.body.end_at)
    )
  }
}