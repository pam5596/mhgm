import { describe, expect, it } from "vitest"
import { KeywordsDELETERequestDTO } from "../../../shared/dtos/keywords.delete.req.dto"

describe("KeywordsDELETERequestDTOの単体テスト", () => {
  const values = {
    params: {
      id: "1"
    },
  }

  it("DTOが作成できる", () => {
    expect(() => new KeywordsDELETERequestDTO(values)).not.toThrow()
  })
})