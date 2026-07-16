import type { Setting } from "../../shared/models/interfaces/setting.interface";
import type { BaseDTOInterface } from "./_base";
import type { Keyword } from "../../shared/models/interfaces/keyword.interface";

export interface UsersSettingsGETResponse implements BaseDTOInterface {
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