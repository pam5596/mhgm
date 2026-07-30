import { describe, expect, it } from "vitest";
import { KeywordRepository } from "../../../server/repositories/keyword.repository";
import { SettingRepository } from "../../../server/repositories/setting.repository";
import { GetUserSettingsService } from "../../../server/services/get_user_settings.service";
import { AuthPublicUsersSettingsGETRequestDTO } from "../../../shared/dtos";
import { create } from "../crud.util";
import { withSetupDB } from "../db.setup";
import { prisma } from "../prisma.client";

describe("GetUserSettingsServiceの結合テスト", () => {
	const settingRepo = new SettingRepository(prisma);
	const keywordRepo = new KeywordRepository(prisma);
	const service = new GetUserSettingsService(settingRepo, keywordRepo);

	withSetupDB();

	it("設定とキーワードをDBから取得してDTOを返す", async () => {
		await create("user", 1);
		await create("setting", 1);
		await create("keyword", 1);
		await create("keyword", 2);

		const request = new AuthPublicUsersSettingsGETRequestDTO({
			sessions: {
				user_id: 1,
			},
		});

		const result = await service.execute(request);

		expect(result.values.body.setting.quest_limit).toBe(1);
		expect(result.values.body.keywords).toHaveLength(2);
		expect(result.values.body.keywords[0]).toMatchObject({
			id: 1,
			keyword: "keyword",
			action: "ENTRY",
		});
	});
});
