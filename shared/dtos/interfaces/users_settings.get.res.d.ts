import type { Setting } from "../../shared/models/interfaces/setting.interface";
import type { Keyword } from "../../shared/models/interfaces/keyword.interface";

export interface UsersSettingsGETResponse {
  body: {
    setting: {
      quest_limit: Setting["quest_limit"]
    },
    keywords: {
      id: Keyword["id"]
      keyword: Keyword["keyword"],
      action: Keyword["action"]
    }[]
  }
}