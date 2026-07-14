import { KeywordModel } from "../../shared/models/keyword.model";
import { BaseRepository } from "./_base";

export class KeywordRepository extends BaseRepository {
  constructor(
    client: PrismaORMClient
  ){
    super(client)
  }

  create = async (model: KeywordModel) => await this.prismaErrorHandler(
    'create',
    async () => {
      const created_setting = await this.client.keyword.create({
        data: model.toIgnoreUndefinedObject()
      })
      return new KeywordModel(created_setting)
    }
  )

  findManyByUserId = async (user_id: number) => await this.prismaErrorHandler(
    'read',
    async () => {
      const finded_keywords = await this.client.keyword.findMany({
        where: { user_id }
      })
      return finded_keywords.map(keyword => new KeywordModel(keyword))
    }
  )

  update = async (model: KeywordModel) => await this.prismaErrorHandler(
    'update',
    async () => {
      const updated_keyword = await this.client.keyword.update({
        where: { id: model.id },
        data: model.toIgnoreUndefinedObject()
      })
      return new KeywordModel(updated_keyword)
    }
  )

  destroyById = async(id: number) => await this.prismaErrorHandler(
    'delete',
    async () => {
      await this.client.keyword.delete({
        where: { id }
      })
    }
  )
}