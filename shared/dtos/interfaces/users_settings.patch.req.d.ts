import type { Setting } from "../../shared/models/interfaces/setting.interface";
import type { BaseDTOInterface } from "./_base";

export interface UsersSettingsPATCHRequest implements BaseDTOInterface {
  body: {
    quest_limit: Setting["quest_limit"]
  }
}