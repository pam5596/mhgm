import { describe, expect, it } from "vitest"
import { UsersSettingsGETRequestDTO } from "../../../shared/dtos/users_settings.get.req.dto"

describe("UsersSettingsGETRequestDTOの単体テスト", () => {
  const values = {
    sessions: {
      user: {
        user_id: 1
      }
    }
  }

  it("DTOが作成できる", () => {
    expect(() => new UsersSettingsGETRequestDTO(values) ).not.toThrow()
  })
})