import { BaseRepository } from "./_base";
import { EventMessageModel } from "../../shared/models/event_message.model";

export class EventMessageRepository extends BaseRepository {
  create = async (model: EventMessageModel) =>
      await this.prismaErrorHandler("create", async () => {
        const created_event_message = await this.client.eventMessage.create({
          data: model.toIgnoreUndefinedObject(),
        });
        return new EventMessageModel(created_event_message);
      });
  
    findByUserId = async (user_id: number) =>
      await this.prismaErrorHandler("read", async () => {
        const finded_event_message = await this.client.eventMessage.findUnique({
          where: { user_id },
        });
        return finded_event_message && new EventMessageModel(finded_event_message);
      });
  
    update = async (model: EventMessageModel) =>
      await this.prismaErrorHandler("update", async () => {
        const updated_event_message = await this.client.eventMessage.update({
          where: { user_id: model.values.user_id },
          data: model.toIgnoreUndefinedObject(),
        });
        return new EventMessageModel(updated_event_message);
      });
  
    destroyByUserId = async (user_id: number) =>
      await this.prismaErrorHandler("delete", async () => {
        await this.client.eventMessage.delete({
          where: { user_id },
        });
      });
}