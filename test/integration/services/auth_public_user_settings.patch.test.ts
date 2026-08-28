import { describe, expect, it } from "vitest";
import { SettingRepository } from "../../../server/repositories/setting.repository";
import { UserRepository } from "../../../server/repositories/user.repository";
import { AuthPublicUserSettingsPATCHService } from "../../../server/services/auth_public_user_settings.patch.service";
import { AuthPublicUsersSettingsPATCHRequestDTO } from "../../../shared/dtos/auth_public_users_settings.patch.req.dto";
import { withSetupDB } from "../db.setup";
import { errorHandler } from "../errorHandler.util";
import { Factory } from "../factory.util";
import { prisma } from "../prisma.client";
import { SettingModel } from "../../../shared/models/setting.model";
import { UserModel } from "../../../shared/models/user.model";

describe("AuthPublicUserSettingsPATCHServiceの結合テスト", () => {
	const settingRepo = new SettingRepository(prisma);
	const userRepo = new UserRepository(prisma);
	const service = new AuthPublicUserSettingsPATCHService(settingRepo);

	withSetupDB();

	it("設定をDBに反映して更新できる", errorHandler(async () => {
		const user = await userRepo.upsert(Factory.create(UserModel));
		await settingRepo.create(Factory.create(SettingModel, { user_id: user.values.id }));
		const updatedSetting = Factory.create(SettingModel, { user_id: user.values.id });

		const request = new AuthPublicUsersSettingsPATCHRequestDTO({
			sessions: {
				user_id: user.values.id!,
			},
			body: {
				quest_limit: updatedSetting.values.quest_limit,
				player_limit: updatedSetting.values.player_limit,
			},
		});

		await service.execute(request);
	}));
});
