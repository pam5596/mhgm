import { UserModel } from "../../shared/models/user.model";
import { PrismaORMClient } from "../clients/prisma";
import { BaseRepository } from "./_base";

export class UserRepository extends BaseRepository<UserModel> {
  constructor(
    client: PrismaORMClient
  ){
    super(client)
  }
  
  innerUpsert = async (model: UserModel) => {
    const upserted_user = await this.client.user.upsert({
      where: { channel_id: model.channel_id },
      update: { name: model.name, avatar: model.avatar },
      create: model.toIgnoreUndefinedObject()
    })

    return new UserModel(upserted_user)
  }


  findByID = async (id: number) => await this.prismaErrorHandler(
    'errors.crud.read',
    () => (async (id) => {
      const finded_user = await this.client.user.findUnique({
        where: { id }
      })

      return finded_user && new UserModel(finded_user)
    })(id)
  )
  
  findByChannelID = async (channel_id: User["channel_id"]) => await this.prismaErrorHandler(
    'errors.crud.read',
    () => (async (channel_id) => {
      const finded_user = await this.client.user.findUnique({
        where: { channel_id }
      })

      return finded_user && new UserModel(finded_user)
    })(channel_id)
  )
  

  innerDestroy = async (id: number) => {
    await this.client.user.delete({
      where: { id }
    })
  }
}