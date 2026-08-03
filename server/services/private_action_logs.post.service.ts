import type { BaseService } from "./_base";
import type { PrivateActionlogsPOSTRequestDTO } from "../../shared/dtos/private_action_logs.post.req.dto";
import { PrivateActionlogsPOSTResponseDTO } from "../../shared/dtos/private_action_logs.post.res.dto";
import type { ActionLogRepository } from "../repositories/action_log.repository";
import { ActionLogModel } from "../../shared/models/action_log.model";

export class PrivateActionlogsPOSTService
  implements BaseService<PrivateActionlogsPOSTRequestDTO, PrivateActionlogsPOSTResponseDTO>
{
  constructor(private actionLogRepository: ActionLogRepository) {}

  async execute(request: PrivateActionlogsPOSTRequestDTO) {
    const body = request.values.body

    const action_log = await this.actionLogRepository.create(
      new ActionLogModel(body)
    )

    return new PrivateActionlogsPOSTResponseDTO({
      body: { id: action_log.values.id! }
    })
  }
}
