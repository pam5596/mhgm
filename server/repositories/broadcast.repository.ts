import type { Broadcast } from "~~/shared/models/interfaces/broadcast.interface";
import { BroadcastModel } from "../../shared/models/broadcast.model";
import { BaseRepository } from "./_base";

export class BroadcastRepository extends BaseRepository {
	upsert = async (model: BroadcastModel) =>
		await this.prismaErrorHandler("create", async () => {
			const upserted_broadcast = await this.client.broadcast.upsert({
				where: { stream_id: model.values.stream_id },
				update: {
					title: model.values.title,
					thumbnail: model.values.thumbnail,
					live_chat_id: model.values.live_chat_id,
					end_at: model.values.end_at,
				},
				create: model.toIgnoreUndefinedObject(),
			});
			return new BroadcastModel(upserted_broadcast);
		});

	findById = async (id: bigint) =>
		await this.prismaErrorHandler("read", async () => {
			const finded_broadcast = await this.client.broadcast.findUnique({
				where: { id },
			});
			return finded_broadcast && new BroadcastModel(finded_broadcast);
		});

	findByStreamId = async (stream_id: Broadcast["stream_id"]) =>
		await this.prismaErrorHandler("read", async () => {
			const finded_broadcast = await this.client.broadcast.findUnique({
				where: { stream_id },
			});
			return finded_broadcast && new BroadcastModel(finded_broadcast);
		});

	findFirstByUserId = async (user_id: bigint) =>
		await this.prismaErrorHandler("read", async () => {
			const finded_broadcast = await this.client.broadcast.findFirst({
				where: { user_id },
			});
			return finded_broadcast && new BroadcastModel(finded_broadcast);
		});

	destroyById = async (id: bigint) =>
		await this.prismaErrorHandler("delete", async () => {
			await this.client.broadcast.delete({
				where: { id },
			});
		});
}
