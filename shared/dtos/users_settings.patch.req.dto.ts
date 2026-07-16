import z from "zod";
import { BaseDTO } from "./_base";
import type { UsersSettingsPATCHRequest } from "./interfaces/users_settings.patch.req"

export class UserSettingsPATCHRequestDTO extends BaseDTO<UsersSettingsPATCHRequest> {
  constructor(values: UsersSettingsPATCHRequest) {
    super(values, UserSettingsPATCHRequestDTO.schema())
  }

  private static schema() {
    return z.strictObject({
      body: z.strictObject({
        quest_limit: z.number()
      })
    })
  }
} 