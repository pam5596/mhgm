import { BaseRepository } from "./_base";

export class UserRepository extends BaseRepository {
	create = async (model: UserModel) =>
		await this.prismaErrorHandler("create", async () => {
			const created_user = await this.client.user.create({
				data: model.toIgnoreUndefinedObject(),
			});
			return new UserModel(created_user);
		});

	findByID = async (id: number) =>
		await this.prismaErrorHandler("read", async () => {
			const finded_user = await this.client.user.findUnique({
				where: { id },
			});

			return finded_user && new UserModel(finded_user);
		});

	findByChannelID = async (channel_id: User["channel_id"]) =>
		await this.prismaErrorHandler("read", () =>
			(async (channel_id) => {
				const finded_user = await this.client.user.findUnique({
					where: { channel_id },
				});

				return finded_user && new UserModel(finded_user);
			})(channel_id),
		);

	update = async (model: UserModel) =>
		await this.prismaErrorHandler("update", async () => {
			const updated_user = await this.client.user.update({
				where: { channel_id: model.values.channel_id },
				data: { 
					name: model.values.name, 
					avatar: model.values.avatar 
				},
			});

			return new UserModel(updated_user);
		});

	destroy = async (id: number) =>
		await this.prismaErrorHandler("delete", async () => {
			await this.client.user.delete({
				where: { id },
			});
		});
}
