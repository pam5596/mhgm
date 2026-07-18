import z from "zod";
import { BaseDTO } from "./_base";
import type { UsersSettingsGETRequest } from "./interfaces/users_settings.get.req"

export class UsersSettingsGETRequestDTO extends BaseDTO<UsersSettingsGETRequest> {
  constructor(values: UsersSettingsGETRequest) {
    super(values, UsersSettingsGETRequestDTO.schema())
  }

  private static schema() {
    return z.strictObject({
      sessions: z.strictObject({
        user: z.strictObject({
          user_id: z.number()
        })
      })
    })
  }

  get session() {
    return this.values.sessions
  }
} 