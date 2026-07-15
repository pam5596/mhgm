import { ActionLogModel } from "../../shared/models/action_log.model";
import { BaseRepository } from "./_base";

export class ActionLogRepository extends BaseRepository {
  create = async (model: ActionLogModel) => await this.prismaErrorHandler(
    'create',
    async () => {
      const created_action_log = await this.client.actionLog.create({
        data: model.toIgnoreUndefinedObject()
      })
      return new ActionLogModel(created_action_log)
    }
  )

  destroyById = async(id: number) => await this.prismaErrorHandler(
    'delete',
    async () => {
      await this.client.actionLog.delete({
        where: { id }
      })
    }
  )
}