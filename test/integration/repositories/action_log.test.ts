import { describe, expect, it } from "vitest";
import { withSetupDB } from "../db.setup";
import { PrismaORMClient } from "../../../server/clients/prisma";
import { ActionLogRepository } from "../../../server/repositories/action_log.repository";
import { BroadcastRepository } from "../../../server/repositories/broadcast.repository";
import { KeywordRepository } from "../../../server/repositories/keyword.repository";
import { UserRepository } from "../../../server/repositories/user.repository";

import { users, broadcast, keywords, action_log } from "../fixtures.util";

describe('ActionLogRepositoryの結合テスト', () => {
  const client = new PrismaORMClient(
    process.env.DATABASE_URL,
    process.env.NODE_ENV
  )
  const userRepo = new UserRepository(client)
  const broadcastRepo = new BroadcastRepository(client)
  const keywordRepo = new KeywordRepository(client)
  const repo = new ActionLogRepository(client)
  withSetupDB(client)

  it("アクションログを作成できる", async () => {
    const user = users(1)
    await userRepo.upsert(user!)

    const broadcast_model = broadcast(1)
    await broadcastRepo.upsert(broadcast_model!)

    const keyword_model = keywords(1)
    await keywordRepo.create(keyword_model!)

    const action_log_model = action_log(1)
    const created = action_log_model && await repo.create(action_log_model)

    expect(created?.id).toBeTruthy()
    expect(created?.created_at).toBeTruthy()
    expect(created?.message).toBe("message")
  })

  it("アクションログを削除できる", async () => {
    const user = users(1)
    await userRepo.upsert(user!)

    const broadcast_model = broadcast(1)
    await broadcastRepo.upsert(broadcast_model!)

    const keyword_model = keywords(1)
    await keywordRepo.create(keyword_model!)

    const action_log_model = action_log(1)
    const created = action_log_model && await repo.create(action_log_model)
    await repo.destroyById(created!.id!)

    const deleted = created?.id && await client.actionLog.findUnique({ 
      where: { id: created.id }
    })
    expect(deleted).toBeNull()
  })
})
