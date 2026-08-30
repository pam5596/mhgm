import { describe, expect, it } from "vitest";
import { KeywordRepository } from "../../../server/repositories/keyword.repository";
import { SettingRepository } from "../../../server/repositories/setting.repository";
import { UserRepository } from "../../../server/repositories/user.repository";
import { AuthPublicUserSettingsGETService } from "../../../server/services/auth_public_user_settings.get.service";
import { AuthPublicUsersSettingsGETRequestDTO } from "../../../shared/dtos/auth_public_users_settings.get.req.dto";
import { withSetupDB } from "../db.setup";
import { errorHandler } from "../errorHandler.util";
import { Factory } from "../factory.util";
import { prisma } from "../prisma.client";
import { KeywordModel } from "../../../shared/models/keyword.model";
import { SettingModel } from "../../../shared/models/setting.model";
import { UserModel } from "../../../shared/models/user.model";

describe("AuthPublicUserSettingsGETServiceの結合テスト", () => {
	const settingRepo = new SettingRepository(prisma);
	const keywordRepo = new KeywordRepository(prisma);
	const userRepo = new UserRepository(prisma);
	const service = new AuthPublicUserSettingsGETService(settingRepo, keywordRepo);

	withSetupDB();

	it("設定とキーワードをDBから取得してDTOを返す", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));
		await settingRepo.create(Factory.create(SettingModel, { user_id: user.values.id }));
		await keywordRepo.create(Factory.create(KeywordModel, { user_id: user.values.id }));
		await keywordRepo.create(Factory.create(KeywordModel, { user_id: user.values.id }));

		const request = new AuthPublicUsersSettingsGETRequestDTO({
			sessions: {
				user_id: user.values.id!,
			},
		});

		const result = await service.execute(request);

		expect(result.values.body.setting.quest_limit).toBeTruthy();
		expect(result.values.body.keywords).toHaveLength(2);
	}));
});
