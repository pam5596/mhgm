import { describe, expect, it } from "vitest";
import { BroadcastRepository } from "../../../server/repositories/broadcast.repository";
import { AuthPublicPUTBroadCastService } from "../../../server/services/auth_public_put_broadcast.service";
import { AuthPublicBroadcastsPUTRequestDTO } from "../../../shared/dtos";
import { create } from "../crud.util";
import { withSetupDB } from "../db.setup";
import { prisma } from "../prisma.client";

describe("AuthPublicPUTBroadCastServiceの結合テスト", () => {
	const broadcastRepo = new BroadcastRepository(prisma);
	const service = new AuthPublicPUTBroadCastService(broadcastRepo);

	withSetupDB();

	it("ブロードキャストをDBに保存してIDを返す", async () => {
		await create("user", 1);

		const request = new AuthPublicBroadcastsPUTRequestDTO({
			sessions: {
				user_id: 1,
			},
			body: {
				stream_id: "stream_id_1",
				title: "live title",
				thumbnail: "https://example.com/thumb.jpg",
				end_at: new Date()
			},
		});

		const result = await service.execute(request);
		const saved = await broadcastRepo.findByStreamId("stream_id_1");

		expect(result.values.body.id).toBeTruthy();
		expect(saved?.values.title).toBe("live title");
		expect(saved?.values.thumbnail).toBe("https://example.com/thumb.jpg");
		expect(saved?.values.user_id).toBe(1);
	});
});
