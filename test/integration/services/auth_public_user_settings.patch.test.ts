import { describe, expect, it } from "vitest";
import { SettingRepository } from "../../../server/repositories/setting.repository";
import { AuthPublicUserSettingsPATCHService } from "../../../server/services/auth_public_user_settings.patch.service";
import { AuthPublicUsersSettingsPATCHRequestDTO } from "../../../shared/dtos/auth_public_users_settings.patch.req.dto";
import { create } from "../crud.util";
import { withSetupDB } from "../db.setup";
import { prisma } from "../prisma.client";

describe("AuthPublicUserSettingsPATCHServiceの結合テスト", () => {
	const settingRepo = new SettingRepository(prisma);
	const service = new AuthPublicUserSettingsPATCHService(settingRepo);

	withSetupDB();

	it("設定をDBに反映して更新できる", async () => {
		await create("user", 1);
		await create("setting", 1);

		const request = new AuthPublicUsersSettingsPATCHRequestDTO({
			sessions: {
				user_id: 1,
			},
			body: {
				quest_limit: 5,
			},
		});

		await service.execute(request);

		const updated = await settingRepo.findByUserId(1);
		expect(updated?.values.quest_limit).toBe(5);
	});
});
