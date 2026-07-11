import { describe, expect, it } from "vitest";
import { UserModel } from "../../../shared/models/user.model";

describe("UserModelの単体テスト", () => {
  const values = {
    id: 1,
    channel_id: 'abcdefgabcdefgabcdefgabc',
    name: 'name',
    avatar: 'https://example.com',
    created_at: new Date()
  }

  it("モデルが作成できる", () => {
    expect(() => new UserModel(values)).not.toThrow()

    const { id, created_at, ...require_params} = values
    expect(() => new UserModel(require_params)).not.toThrow()
  })

  it("channel_idでエラーになる", () => {
    expect(() => new UserModel({ ...values, channel_id: "abc"})).toThrow()
  })

  it("nameでエラーになる", () => {
    expect(() => new UserModel({ ...values, name: ""})).toThrow()
  })

  it("avatarでエラーになる", () => {
    expect(() => new UserModel({ ...values, avatar: "http"})).toThrow()
  })

  it("toObjectメソッドがobjectを返す", () => {
    expect(new UserModel(values).toObject()).toEqual(values)
  })
})