import { describe, expect, it } from "vitest";
import { withSetupDB } from "../db.setup";
import { POSTKeyword } from "../../../server/services/post_keyword.service";
import { KeywordRepository } from "../../../server/repositories/keyword.repository";
import { KeywordsPOSTRequestDTO } from "../../../shared/dtos/keywords.post.req.dto";
import { create } from "../crud.util";
import { prisma } from "../prisma.client";

describe("POSTKeywordServiceの結合テスト", () => {
  const keywordRepo = new KeywordRepository(prisma)
  const service = new POSTKeyword(keywordRepo)

  withSetupDB()

  it("キーワードをDBに保存してIDを返す", async () => {
    await create("user", 1)

    const request = new KeywordsPOSTRequestDTO({
      sessions: {
        user: {
          user_id: 1
        }
      },
      body: {
        keyword: "string",
        action: "ENTRY"
      }
    })

    const result = await service.execute(request)

    const saved = await keywordRepo.findManyByUserId(1)

    expect(result.values.body.id).toBeTruthy()
    expect(saved).toHaveLength(1)
    expect(saved[0]).toMatchObject({
      keyword: "string",
      action: "ENTRY"
    })
  })
})
