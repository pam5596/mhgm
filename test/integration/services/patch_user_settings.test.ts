import { describe, expect, it } from "vitest";
import { SettingRepository } from "../../../server/repositories/setting.repository";
import { PATCHUserSettingsService } from "../../../server/services/patch_user_settings.service";
import { AuthPublicUsersSettingsPATCHRequestDTO } from "../../../shared/dtos";
import { create } from "../crud.util";
import { withSetupDB } from "../db.setup";
import { prisma } from "../prisma.client";

describe("PATCHUserSettingsService", () => {
	const settingRepo = new SettingRepository(prisma);
	const service = new PATCHUserSettingsService(settingRepo);

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
