import { describe, expect, it } from "vitest";
import { SettingModel } from "../../../shared/models/setting.model";

describe("SettingModelの単体テスト", () => {
  const values = {
    user_id: 1,
    quest_limit: 2,
    updated_at: new Date()
  }

  it("モデルが作成できる", () => {
    expect(() => new SettingModel(values)).not.toThrow()

    const {  updated_at, ...require_params} = values
    expect(() => new SettingModel(require_params)).not.toThrow()
  })

  it("quest_limitでエラーになる", () => {
    expect(() => new SettingModel({ ...values, quest_limit: -1})).toThrow()
  })

  it("quest_limitを更新できる", () => {
    const model = new SettingModel(values)
    expect(model.updateQuestLimit(3).quest_limit).toBe(3)
  })

  it("toObjectメソッドがobjectを返す", () => {
    expect(new SettingModel(values).toObject()).toEqual(values)
  })
})