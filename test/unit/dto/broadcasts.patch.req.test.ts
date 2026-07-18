import { describe, expect, it } from "vitest"
import { BroadcastsPATCHRequestDTO } from "../../../shared/dtos/broadcasts.patch.req.dto"

describe("BroadcastsPATCHRequestDTOの単体テスト", () => {
  const values = {
    sessions: {
      user: {
        user_id: 1
      }
    },
    params: {
      id: 1
    },
    body: {
      end_at: new Date()
    }
  }

  it("DTOが作成できる", () => {
    expect(() => new BroadcastsPATCHRequestDTO(values) ).not.toThrow()
  })
})