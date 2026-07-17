import { describe, expect, it } from "vitest"
import { UsersSettingsPATCHRequestDTO } from "../../../shared/dtos/users_settings.patch.req.dto"

describe("UsersSettingsPATCHRequestDTOの単体テスト", () => {
  const values = {
    body: {
      quest_limit: 2
    }
  }

  it("DTOが作成できる", () => {
    expect(() => new UsersSettingsPATCHRequestDTO(values) ).not.toThrow()
  })
})