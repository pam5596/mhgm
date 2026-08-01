import { describe, expect, it } from "vitest";
import { ActionLogRepository } from "../../../server/repositories/action_log.repository";
import { PrivateActionlogsPOSTService } from "../../../server/services/private_action_logs.post.service";
import { PrivateActionlogsPOSTRequestDTO } from "../../../shared/dtos/private_action_logs.post.req.dto";
import { create } from "../crud.util";
import { withSetupDB } from "../db.setup";
import { prisma } from "../prisma.client";

describe("PrivateActionlogsPOSTServiceの結合テスト", () => {
	const actionLogRepo = new ActionLogRepository(prisma);
	const service = new PrivateActionlogsPOSTService(actionLogRepo);

	withSetupDB();

	it("アクションログをDBに保存してIDを返す", async () => {
		await create("user", 1);
		await create("broadcast", 1);
		await create("keyword", 1);

		const request = new PrivateActionlogsPOSTRequestDTO({
			body: {
				message: "message",
				user_id: 1,
				broadcast_id: 1,
				keyword_id: 1,
			},
		});

		const result = await service.execute(request);
		const saved = await prisma.actionLog.findUnique({
			where: { id: result.values.body.id },
		});

		expect(result.values.body.id).toBeTruthy();
		expect(saved?.message).toBe("message");
		expect(saved?.user_id).toBe(1);
		expect(saved?.broadcast_id).toBe(1);
		expect(saved?.keyword_id).toBe(1);
	});
});
