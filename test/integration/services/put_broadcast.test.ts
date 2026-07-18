import { describe, expect, it } from "vitest";
import { withSetupDB } from "../db.setup";
import { PUTBroadCastService } from "../../../server/services/put_broadcast.service";
import { BroadcastRepository } from "../../../server/repositories/broadcast.repository";
import { BroadcastsPUTRequestDTO } from "../../../shared/dtos/broadcasts.put.req.dto";
import { create } from "../crud.util";
import { prisma } from "../prisma.client";

describe("PUTBroadCastServiceの結合テスト", () => {
  const broadcastRepo = new BroadcastRepository(prisma)
  const service = new PUTBroadCastService(broadcastRepo)

  withSetupDB()

  it("ブロードキャストをDBに保存してIDを返す", async () => {
    await create("user", 1)

    const request = new BroadcastsPUTRequestDTO({
      sessions: {
        user: {
          user_id: 1
        }
      },
      body: {
        stream_id: "stream_id_1",
        title: "live title",
        thumbnail: "https://example.com/thumb.jpg"
      }
    })

    const result = await service.execute(request)
    const saved = await broadcastRepo.findByStreamId("stream_id_1")

    expect(result.values.body.id).toBeTruthy()
    expect(saved?.title).toBe("live title")
    expect(saved?.thumbnail).toBe("https://example.com/thumb.jpg")
    expect(saved?.user_id).toBe(1)
  })
})
