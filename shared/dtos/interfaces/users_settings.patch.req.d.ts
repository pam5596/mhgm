import type { Setting } from "../../shared/models/interfaces/setting.interface";

export interface UsersSettingsPATCHRequest {
  body: {
    quest_limit: Setting["quest_limit"]
  }
}