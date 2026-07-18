import { describe, expect, it } from "vitest";
import { withSetupDB } from "../db.setup";
import { ActionLogRepository } from "../../../server/repositories/action_log.repository";
import { BroadcastRepository } from "../../../server/repositories/broadcast.repository";
import { KeywordRepository } from "../../../server/repositories/keyword.repository";
import { UserRepository } from "../../../server/repositories/user.repository";
import { prisma } from "../prisma.client";
import { users, broadcast, keywords, action_log } from "../fixtures.util";

describe('ActionLogRepositoryの結合テスト', () => {
  const userRepo = new UserRepository(prisma)
  const broadcastRepo = new BroadcastRepository(prisma)
  const keywordRepo = new KeywordRepository(prisma)
  const repo = new ActionLogRepository(prisma)
  withSetupDB()

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

    const deleted = created?.id && await prisma.actionLog.findUnique({ 
      where: { id: created.id }
    })
    expect(deleted).toBeNull()
  })
})
