import { SettingModel } from "../../shared/models/setting.model";
import { BaseRepository } from "./_base";

export class SettingRepository extends BaseRepository {
  create = async (model: SettingModel) => await this.prismaErrorHandler(
    'create',
    async () => {
      const created_setting = await this.client.setting.create({
        data: model.toIgnoreUndefinedObject()
      })
      return new SettingModel(created_setting)
    }
  )

  findByUserId = async (user_id: number) => await this.prismaErrorHandler(
    'read',
    async () => {
      const finded_setting = await this.client.setting.findUnique({
        where: { user_id }
      })
      return finded_setting && new SettingModel(finded_setting)
    }
  )

  update = async(model: SettingModel) => await this.prismaErrorHandler(
    'update',
    async () => {
      const updated_setting = await this.client.setting.update({
        where: { user_id: model.user_id },
        data: model.toIgnoreUndefinedObject()
      })
      return new SettingModel(updated_setting)
    }
  )

  destroyByUserId = async(user_id: number) => await this.prismaErrorHandler(
    'delete',
    async () => {
      await this.client.setting.delete({
        where: { user_id }
      })
    }
  )
}