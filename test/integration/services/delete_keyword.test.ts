import { describe, expect, it } from "vitest";
import { withSetupDB } from "../db.setup";
import { DELETEKeyword } from "../../../server/services/delete_keyword.service";
import { KeywordRepository } from "../../../server/repositories/keyword.repository";
import { KeywordsDELETERequestDTO } from "../../../shared/dtos/keywords.delete.req.dto";
import { create } from "../crud.util";
import { prisma } from "../prisma.client";

describe("DELETEKeywordServiceの結合テスト", () => {
  const keywordRepo = new KeywordRepository(prisma)
  const service = new DELETEKeyword(keywordRepo)

  withSetupDB()

  it("キーワードをDBで削除できる", async () => {
    await create("user", 1)
    await create("keyword", 1)

    const request = new KeywordsDELETERequestDTO({
      sessions: {
        user: {
          user_id: 1
        }
      },
      params: {
        id: 1
      }
    })

    await service.execute(request)

    const updated = await keywordRepo.findById(1)
    expect(updated).toBeNull()
  })
})
