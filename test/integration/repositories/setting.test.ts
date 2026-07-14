import { describe, expect, it } from "vitest";
import { withSetupDB } from "../db.setup";
import { PrismaORMClient } from "../../../server/clients/prisma";
import { SettingRepository } from "../../../server/repositories/setting.repository";
import { UserRepository } from "../../../server/repositories/user.repository";

import { users, settings } from "../fixtures.util";

describe('SettingRepositoryの結合テスト', () => {
  const client = new PrismaORMClient(
    process.env.DATABASE_URL,
    process.env.NODE_ENV
  )
  const userRepo = new UserRepository(client)
  const repo = new SettingRepository(client)
  withSetupDB(client)

  it("設定を作成できる", async () => {
    const user = users(1)
    await userRepo.upsert(user!)

    const setting = settings(1)
    const created = setting && await repo.create(setting)

    expect(created?.user_id).toBe(1)
    expect(created?.quest_limit).toBe(1)
  })

  it("設定をuser_idで取得できる", async () => {
    const user = users(1)
    await userRepo.upsert(user!)

    const setting = settings(1)
    await repo.create(setting!)

    const finded = await repo.findByUserId(1)
    expect(finded?.user_id).toBe(1)
  })

  it("設定を更新できる", async () => {
    const user = users(1)
    await userRepo.upsert(user!)

    const setting = settings(1)
    await repo.create(setting!)

    const updated_setting = setting?.updateQuestLimit(5)
    const updated = updated_setting && await repo.update(updated_setting)

    expect(updated?.quest_limit).toBe(5)
  })

  it("設定を削除できる", async () => {
    const user = users(1)
    await userRepo.upsert(user!)

    const setting = settings(1)
    await repo.create(setting!)
    await repo.destroyByUserId(1)

    const finded = await repo.findByUserId(1)
    expect(finded).toBeNull()
  })
})
