import { describe, expect, it } from "vitest"
import { KeywordsPOSTRequestDTO } from "../../../shared/dtos/keywords.post.req.dto"

describe("KeywordsPOSTRequestDTOの単体テスト", () => {
  const values = {
    sessions: {
      user: {
        user_id: 1
      }
    },
    body: {
      keyword: "string",
      action: "CANCEL"
    }
  }

  it("DTOが作成できる", () => {
    expect(() => new KeywordsPOSTRequestDTO(values) ).not.toThrow()
  })
})