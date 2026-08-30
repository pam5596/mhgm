import { describe, expect, it } from "vitest";
import { BroadcastRepository } from "../../../server/repositories/broadcast.repository";
import { UserRepository } from "../../../server/repositories/user.repository";
import { AuthPublicBroadcastPUTService } from "../../../server/services/auth_public_broadcast.put.service";
import { AuthPublicBroadcastsPUTRequestDTO } from "../../../shared/dtos/auth_public_broadcasts.put.req.dto";
import { withSetupDB } from "../db.setup";
import { errorHandler } from "../errorHandler.util";
import { Factory } from "../factory.util";
import { prisma } from "../prisma.client";
import { UserModel } from "../../../shared/models/user.model";
import { BroadcastModel } from "../../../shared/models/broadcast.model";

describe("AuthPublicBroadcastPUTServiceの結合テスト", () => {
	const broadcastRepo = new BroadcastRepository(prisma);
	const userRepo = new UserRepository(prisma);
	const service = new AuthPublicBroadcastPUTService(broadcastRepo);

	withSetupDB();

	it("ブロードキャストをDBに保存してIDを返す", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));
		const broadcast = Factory.create(BroadcastModel, { end_at: new Date() })

		const request = new AuthPublicBroadcastsPUTRequestDTO({
			sessions: {
				user_id: user.values.id!
			},
			body: {
				stream_id: broadcast.values.stream_id,
				live_chat_id: broadcast.values.live_chat_id,
				title: broadcast.values.title,
				thumbnail: broadcast.values.thumbnail,
				end_at: broadcast.values.end_at!.toISOString()
			}
		});

		const result = await service.execute(request);

		expect(result.values.body.id).toBeTruthy();
	}));
});
