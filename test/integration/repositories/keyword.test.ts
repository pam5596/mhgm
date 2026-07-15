import { describe, expect, it } from "vitest";
import { withSetupDB } from "../db.setup";
import { PrismaORMClient } from "../../../server/clients/prisma";
import { KeywordRepository } from "../../../server/repositories/keyword.repository";
import { UserRepository } from "../../../server/repositories/user.repository";

import { users, keywords } from "../fixtures.util";

describe('KeywordRepositoryの結合テスト', () => {
  const client = new PrismaORMClient(
    process.env.DATABASE_URL,
    process.env.NODE_ENV
  )
  const userRepo = new UserRepository(client)
  const repo = new KeywordRepository(client)
  withSetupDB(client)

  it("キーワードを作成できる", async () => {
    const user = users(1)
    await userRepo.upsert(user!)

    const keyword = keywords(1)
    const created = keyword && await repo.create(keyword)

    expect(created?.id).toBeTruthy()
    expect(created?.keyword).toBe("keyword")
  })

  it("キーワードをuser_idで取得できる", async () => {
    const user = users(1)
    await userRepo.upsert(user!)

    const keyword = keywords(1)
    await repo.create(keyword!)

    const finded = await repo.findManyByUserId(1)
    expect(finded[0]?.user_id).toBe(1)
    expect(finded[0]?.keyword).toBe("keyword")
  })

  it("キーワードを更新できる", async () => {
    const user = users(1)
    await userRepo.upsert(user!)

    const keyword = keywords(1)
    const created = keyword && await repo.create(keyword)

    const updated_keyword = created?.updateKeyword("updated")
    const updated = updated_keyword && await repo.update(updated_keyword)

    expect(updated?.keyword).toBe("updated")
  })

  it("キーワードを削除できる", async () => {
    const user = users(1)
    await userRepo.upsert(user!)

    const keyword = keywords(1)
    const created = keyword && await repo.create(keyword)
    await repo.destroyById(created!.id!)

    const finded = await repo.findManyByUserId(1)
    expect(finded).toHaveLength(0)
  })
})
