import { describe, expect, it } from "vitest";
import { withSetupDB } from "../db.setup";
import { PrismaORMClient } from "../../../server/clients/prisma";
import { UserRepository } from "../../../server/repositories/user.repository"

import { users } from "../fixtures.util";

describe('UserRepositoryの結合テスト', () => {
  const client = new PrismaORMClient(
    process.env.DATABASE_URL,
    process.env.NODE_ENV
  )
  const repo = new UserRepository(client)
  withSetupDB(client)

  it("ユーザーをupsertできる", async () => {
    const user = users(1)
    const inserted = user && await repo.upsert(user)
    expect(inserted?.id).toBe(1)
    expect(inserted?.created_at).toBeTruthy()

    const updated_user = user?.update({
      name: "update_name",
      avatar: "https://update.avatar.com"
    })
    const updated = updated_user && await repo.upsert(updated_user)
    expect(updated?.name).toBe("update_name")
  })

  it("ユーザーをidで取得できる", async () => {
    const user = users(1)
    const inserted = user && await repo.upsert(user)

    const finded = await repo.findByID(1)
    expect(finded?.id).toBe(inserted?.id)
  })

  it("ユーザーをchannel_idで取得できる", async () => {
    const user = users(1)
    const inserted = user && await repo.upsert(user)

    const finded = await repo.findByChannelID("channel_id_of_user_id=01")
    expect(finded?.channel_id).toBe(inserted?.channel_id)
  })

  it("ユーザーを削除できる", async () => {
    const user = users(1)
    const inserted = user && await repo.upsert(user)
    await repo.destroy(1)
    const finded = inserted?.id && await repo.findByID(inserted.id)
    
    expect(finded).toBeNull()
  })
})