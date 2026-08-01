import { describe, expect, it } from "vitest";
import { UserRepository } from "../../../server/repositories/user.repository";
import { PrivateUsersPUTService } from "../../../server/services/private_users.put.service";
import { PrivateUsersPUTRequestDTO } from "../../../shared/dtos/private_users.put.req.dto";
import { create } from "../crud.util";
import { withSetupDB } from "../db.setup";
import { prisma } from "../prisma.client";

describe("PrivateUsersPUTServiceの結合テスト", () => {
	const userRepo = new UserRepository(prisma);
	const service = new PrivateUsersPUTService(userRepo);

	withSetupDB();

	it("ユーザーをDBに保存してIDを返す", async () => {
		const request = new PrivateUsersPUTRequestDTO({
			body: {
				channel_id: "channel_id_of_user_id=03",
				name: "user_3",
				avatar: "https://picsum.photos/seed/picsum/200/300",
			},
		});

		const result = await service.execute(request);
		const saved = await userRepo.findByChannelID("channel_id_of_user_id=03");

		expect(result.values.body.id).toBeTruthy();
		expect(saved?.values.id).toBe(result.values.body.id);
		expect(saved?.values.name).toBe("user_3");
		expect(saved?.values.avatar).toBe(
			"https://picsum.photos/seed/picsum/200/300",
		);
	});
});
