import { describe, expect, it } from "vitest";
import { KeywordModel } from "../../../shared/models/keyword.model";
import { ActionUnion } from "../../../shared/enums/action.enum";

describe("KeywordModelの単体テスト", () => {
  const values = {
    id: 1,
    keyword: "string",
    action: "ENTRY" as ActionUnion,
    created_at: new Date(),
    user_id: 1
  }

  it("モデルが作成できる", () => {
    expect(() => new KeywordModel(values)).not.toThrow()

    const { id, created_at, ...require_params} = values
    expect(() => new KeywordModel(require_params)).not.toThrow()
  })

  it("keywordでエラーになる", () => {
    expect(() => new KeywordModel({ ...values, keyword: ""})).toThrow()
  })

  it("actionでエラーになる", () => {
    expect(() => new KeywordModel({ ...values, action: "NO_ENUM" as ActionUnion})).toThrow()
  })

  it("keywordを更新できる", () => {
    const model = new KeywordModel(values)
    expect(model.updateKeyword("update").keyword).toBe("update")
  })

  it("toObjectメソッドがobjectを返す", () => {
    expect(new KeywordModel(values).toObject()).toEqual(values)
  })
})