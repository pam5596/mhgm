import { PrismaORMClient } from "../../server/clients/prisma";
import { UserRepository } from "../../server/repositories/user.repository";
import { SettingRepository } from "../../server/repositories/setting.repository";
import { KeywordRepository } from "../../server/repositories/keyword.repository";
import * as fixtures from "./fixtures.util";
import { BroadcastRepository } from "../../server/repositories/broadcast.repository";
import { ActionLogRepository } from "../../server/repositories/action_log.repository";

const client = new PrismaORMClient(
  process.env.DATABASE_URL,
  process.env.NODE_ENV
)

export const create = async (
  model: "user" | "setting" | "keyword" | "broadcast" | "action_log",
  index: number
) => {
  switch (model) {
    case "user":
      const user_repo = new UserRepository(client)
      const user = fixtures.users(index)
      return user && await user_repo.upsert(user)
    case "setting":
      const setting_repo = new SettingRepository(client)
      const setting = fixtures.settings(index)
      return setting && await setting_repo.create(setting)
    case "keyword":
      const keyword_repo = new KeywordRepository(client)
      const keyword = fixtures.keywords(index)
      return keyword && await keyword_repo.create(keyword)
    case "broadcast":
      const broadcast_repo = new BroadcastRepository(client)
      const broadcast = fixtures.broadcast(index)
      return broadcast && await broadcast_repo.upsert(broadcast)
    case "action_log":
      const action_log_repo = new ActionLogRepository(client)
      const action_log = fixtures.action_log(index)
      return action_log && await action_log_repo.create(action_log)
  }
}