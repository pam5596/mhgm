import { BaseRepository } from "./_base";

export class BroadcastRepository extends BaseRepository {
	create = async (model: BroadcastModel) =>
			await this.prismaErrorHandler("create", async () => {
				const created_broadcast = await this.client.broadcast.create({
					data: model.toIgnoreUndefinedObject(),
				});
				return new BroadcastModel(created_broadcast);
			});

	findById = async (id: number) =>
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

	findFirstByUserId = async (user_id: number) =>
		await this.prismaErrorHandler("read", async () => {
			const finded_broadcast = await this.client.broadcast.findFirst({
				where: { user_id },
			});
			return finded_broadcast && new BroadcastModel(finded_broadcast);
		});

	update = async (model: BroadcastModel) =>
		await this.prismaErrorHandler("update", async () => {
			const updated_broadcast = await this.client.broadcast.update({
				where: {
					stream_id: model.values.stream_id
				},
				data: {
					title: model.values.title,
					thumbnail: model.values.thumbnail,
					end_at: model.values.end_at,
				},
			});
			return new BroadcastModel(updated_broadcast);
		});
	

	destroyById = async (id: number) =>
		await this.prismaErrorHandler("delete", async () => {
			await this.client.broadcast.delete({
				where: { id },
			});
		});
}
