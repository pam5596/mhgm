import { describe, expect, it } from "vitest"
import { BroadcastsPUTResponseDTO } from "../../../shared/dtos/broadcasts.put.res.dto"

describe("BroadcastsPUTResponseDTOの単体テスト", () => {
  const values = {
    body: {
      id: 1
    }
  }

  it("DTOが作成できる", () => {
    expect(() => new BroadcastsPUTResponseDTO(values) ).not.toThrow()
  })
})