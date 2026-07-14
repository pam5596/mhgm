import { UserModel } from "../../shared/models/user.model"
import { SettingModel } from "../../shared/models/setting.model"
import user_fixtures from "./fixtures/user.fixtures.json"
import setting_fixtures from "./fixtures/setting.fixtures.json"

export const users = (id: number) => {
  const user = user_fixtures.find((user) => user.id === id);
  return user && new UserModel(user)
}

export const settings = (user_id: number) => {
  const setting = setting_fixtures.find((setting) => setting.user_id === user_id);
  return setting && new SettingModel(setting)
}