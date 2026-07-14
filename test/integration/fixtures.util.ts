import { UserModel } from "../../shared/models/user.model"
import { SettingModel } from "../../shared/models/setting.model"
import { KeywordModel } from "../../shared/models/keyword.model"
import { Keyword } from "../../shared/models/interfaces/keyword.interface"
import user_fixtures from "./fixtures/user.fixtures.json"
import setting_fixtures from "./fixtures/setting.fixtures.json"
import keyword_fixtures from "./fixtures/keyword.fixtures.json"

export const users = (id: number) => {
  const user = user_fixtures.find((user) => user.id === id);
  return user && new UserModel(user)
}

export const settings = (user_id: number) => {
  const setting = setting_fixtures.find((setting) => setting.user_id === user_id);
  return setting && new SettingModel(setting)
}

export const keywords = (id: number) => {
  const keyword = keyword_fixtures.find((keyword) => keyword.id === id) as Keyword
  return keyword && new KeywordModel(keyword)
}