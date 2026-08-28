import { ActionLogRepository } from "../../server/repositories/action_log.repository";
import { BroadcastRepository } from "../../server/repositories/broadcast.repository";
import { KeywordRepository } from "../../server/repositories/keyword.repository";
import { SettingRepository } from "../../server/repositories/setting.repository";
import { UserRepository } from "../../server/repositories/user.repository";
import { ActionLogModel } from "../../shared/models/action_log.model";
import { BroadcastModel } from "../../shared/models/broadcast.model";
import { KeywordModel } from "../../shared/models/keyword.model";
import { SettingModel } from "../../shared/models/setting.model";
import { UserModel } from "../../shared/models/user.model";
import { Factory } from "./factory.util";
import { prisma } from "./prisma.client";

export const create = async (
	model: "user" | "setting" | "keyword" | "broadcast" | "action_log"
) => {
	switch (model) {
		case "user": {
			const user_repo = new UserRepository(prisma);
			const user = Factory.create(UserModel)
			return user && (await user_repo.upsert(user));
		}
		case "setting": {
			const setting_repo = new SettingRepository(prisma);
			const setting = Factory.create(SettingModel);
			return setting && (await setting_repo.create(setting));
		}
		case "keyword": {
			const keyword_repo = new KeywordRepository(prisma);
			const keyword = Factory.create(KeywordModel)
			return keyword && (await keyword_repo.create(keyword));
		}
		case "broadcast": {
			const broadcast_repo = new BroadcastRepository(prisma);
			const broadcast = Factory.create(BroadcastModel)
			return broadcast && (await broadcast_repo.upsert(broadcast));
		}
		case "action_log": {
			const action_log_repo = new ActionLogRepository(prisma);
			const action_log = Factory.create(ActionLogModel)
			return action_log && (await action_log_repo.create(action_log));
		}
	}
};
