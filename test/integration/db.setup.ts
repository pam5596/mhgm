import { afterAll, afterEach, beforeAll, beforeEach } from "vitest";
import { PrismaORMClient } from "../../server/clients/prisma";

import users_fixture from "./fixtures/user.fixtures.json"

export function withSetupDB(client :PrismaORMClient) {
  beforeAll(async() => {
    await client.$executeRawUnsafe(`
      TRUNCATE TABLE
        "test"."users",
        "test"."settings",
        "test"."keywords",
        "test"."broadcasts",
        "test"."action_logs"
      RESTART IDENTITY;
    `)
  })

  beforeEach(async () => {
    await client.$executeRaw`BEGIN`;
  });

  afterEach(async () => {
    await client.$executeRaw`ROLLBACK`;
  })

  afterAll(async () => {
    await client.$executeRawUnsafe(`
      TRUNCATE TABLE
        "test"."users",
        "test"."settings",
        "test"."keywords",
        "test"."broadcasts",
        "test"."action_logs"
      RESTART IDENTITY;
    `)
    await client.$disconnect()
  })
}