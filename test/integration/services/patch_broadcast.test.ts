import { describe, expect, it } from "vitest";
import { BroadcastRepository } from "../../../server/repositories/broadcast.repository";
import { PATCHBroadCastService } from "../../../server/services/patch_broadcast.service";
import { BroadcastsPATCHRequestDTO } from "../../../shared/dtos/broadcasts.patch.req.dto";
import { create } from "../crud.util";
import { withSetupDB } from "../db.setup";
import { prisma } from "../prisma.client";

describe("PATCHBroadCastServiceの結合テスト", () => {
	const broadcastRepo = new BroadcastRepository(prisma);
	const service = new PATCHBroadCastService(broadcastRepo);

	withSetupDB();

	it("ブロードキャストの終了時刻をDBで更新できる", async () => {
		await create("user", 1);
		await create("broadcast", 1);

		const request = new BroadcastsPATCHRequestDTO({
			sessions: {
				user: {
					user_id: 1,
				},
			},
			params: {
				id: 1,
			},
			body: {
				end_at: new Date("2026-07-19T12:00:00.000Z"),
			},
		});

		await service.execute(request);

		const updated = await broadcastRepo.findById(1);
		expect(updated?.end_at?.toISOString()).toBe("2026-07-19T12:00:00.000Z");
	});
});
