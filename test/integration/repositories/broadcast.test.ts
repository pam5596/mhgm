import { describe, expect, it } from "vitest";
import { withSetupDB } from "../db.setup";
import { BroadcastRepository } from "../../../server/repositories/broadcast.repository";
import { UserRepository } from "../../../server/repositories/user.repository";
import { prisma } from "../prisma.client";
import { users, broadcast } from "../fixtures.util";

describe('BroadcastRepositoryの結合テスト', () => {
  const userRepo = new UserRepository(prisma)
  const repo = new BroadcastRepository(prisma)
  withSetupDB()

  it("ブロードキャストをupsertできる", async () => {
    const user = users(1)
    await userRepo.upsert(user!)

    const broadcast_model = broadcast(1)
    const inserted = broadcast_model && await repo.upsert(broadcast_model)

    expect(inserted?.id).toBeTruthy()
    expect(inserted?.begin_at).toBeTruthy()
    expect(inserted?.end_at).toBeNull()

    const updated_broadcast = broadcast_model?.updateEndAt(new Date("2026-07-15T00:00:00.000Z"))
    const updated = updated_broadcast && await repo.upsert(updated_broadcast)

    expect(updated?.end_at?.toISOString()).toBe("2026-07-15T00:00:00.000Z")
  })

  it("ブロードキャストをstream_idで取得できる", async () => {
    const user = users(1)
    await userRepo.upsert(user!)

    const broadcast_model = broadcast(1)
    await repo.upsert(broadcast_model!)

    const finded = await repo.findByStreamId("stream_id_1")
    expect(finded?.stream_id).toBe("stream_id_1")
  })

  it("ブロードキャストをuser_idで取得できる", async () => {
    const user = users(1)
    await userRepo.upsert(user!)

    const broadcast_model = broadcast(1)
    await repo.upsert(broadcast_model!)

    const finded = await repo.findFirstByUserId(1)
    expect(finded?.user_id).toBe(1)
  })

  it("ブロードキャストを削除できる", async () => {
    const user = users(1)
    await userRepo.upsert(user!)

    const broadcast_model = broadcast(1)
    const inserted = broadcast_model && await repo.upsert(broadcast_model)
    await repo.destroyById(inserted!.id!)

    const finded = await repo.findByStreamId("stream_id_1")
    expect(finded).toBeNull()
  })
})
