import { describe, expect, it } from "vitest";
import { withSetupDB } from "../db.setup";
import { GetUserSettingsService } from "../../../server/services/get_users_settings.service";
import { SettingRepository } from "../../../server/repositories/setting.repository";
import { KeywordRepository } from "../../../server/repositories/keyword.repository";
import { UsersSettingsGETRequestDTO } from "../../../shared/dtos/users_settings.get.req.dto";
import { create } from "../crud.util";
import { PrismaORMClient } from "../../../server/clients/prisma";

describe("GetUserSettingsService", () => {
  const client = new PrismaORMClient(
    process.env.DATABASE_URL,
    process.env.NODE_ENV
  )
  const settingRepo = new SettingRepository(client)
  const keywordRepo = new KeywordRepository(client)
  const service = new GetUserSettingsService(settingRepo, keywordRepo)

  withSetupDB(client)

  it("設定とキーワードをDBから取得してDTOを返す", async () => {
    await create("user", 1)
    await create("setting", 1)
    await create("keyword", 1)
    await create("keyword", 2)

    const request = new UsersSettingsGETRequestDTO ({
      sessions: {
        user: {
          user_id: 1
        }
      }
    })

    const result = await service.execute(request)

    expect(result.values.body.setting.quest_limit).toBe(1)
    expect(result.values.body.keywords).toHaveLength(2)
    expect(result.values.body.keywords[0]).toMatchObject({
      id: 1,
      keyword: "keyword",
      action: "ENTRY"
    })
  })
})
