import { describe, expect, it } from "vitest";
import { UserRepository } from "../../../server/repositories/user.repository";
import { PrivateUsersPUTService } from "../../../server/services/private_users.put.service";
import { PrivateUsersPUTRequestDTO } from "../../../shared/dtos/private_users.put.req.dto";
import { UserModel } from "../../../shared/models/user.model";
import { withSetupDB } from "../db.setup";
import { errorHandler } from "../errorHandler.util";
import { prisma } from "../prisma.client";
import { Factory } from "../factory.util";

describe("PrivateUsersPUTServiceの結合テスト", () => {
	const userRepo = new UserRepository(prisma);
	const service = new PrivateUsersPUTService(userRepo);

	withSetupDB();

	it("ユーザーをDBに保存してIDを返す", errorHandler(async () => {
		const user = Factory.create(UserModel);
		const request = new PrivateUsersPUTRequestDTO({
			body: {
				channel_id: user.values.channel_id,
				name: user.values.name,
				avatar: user.values.avatar,
			},
		});

		const result = await service.execute(request);
		const saved = await userRepo.findByChannelID(user.values.channel_id);

		expect(result.values.body.id).toBeTruthy();
		expect(saved?.values.id).toBe(result.values.body.id);
		expect(saved?.values.name).toBe(user.values.name);
		expect(saved?.values.avatar).toBe(user.values.avatar);
	}));
});
