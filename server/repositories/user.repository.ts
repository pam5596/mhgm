import { UserModel } from "../../shared/models/user.model";
import { BaseRepository } from "./_base";

export class UserRepository extends BaseRepository {
	upsert = async (model: UserModel) =>
		await this.prismaErrorHandler("create", async () => {
			const upserted_user = await this.client.user.upsert({
				where: { channel_id: model.channel_id },
				update: { name: model.name, avatar: model.avatar },
				create: model.toIgnoreUndefinedObject(),
			});

			return new UserModel(upserted_user);
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

	destroy = async (id: number) =>
		await this.prismaErrorHandler("delete", async () => {
			await this.client.user.delete({
				where: { id },
			});
		});
}
