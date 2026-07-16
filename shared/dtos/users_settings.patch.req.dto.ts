import z from "zod";
import { BaseDTO } from "./_base";
import type { UsersSettingsPATCHRequest } from "./interfaces/users_settings.patch.req"

export class UsersSettingsPATCHRequestDTO extends BaseDTO<UsersSettingsPATCHRequest> {
  constructor(values: UsersSettingsPATCHRequest) {
    super(values, UsersSettingsPATCHRequestDTO.schema())
  }

  private static schema() {
    return z.strictObject({
      body: z.strictObject({
        quest_limit: z.number()
      })
    })
  }
} 