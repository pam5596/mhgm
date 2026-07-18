import { afterAll, afterEach, beforeAll, beforeEach } from "vitest";
import { prisma } from "./prisma.client"

export function withSetupDB() {
  beforeAll(async() => {
    await prisma.$executeRawUnsafe(`
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
    await prisma.$executeRaw`BEGIN`;
  });

  afterEach(async () => {
    await prisma.$executeRaw`ROLLBACK`;
  })

  afterAll(async () => {
    await prisma.$executeRawUnsafe(`
      TRUNCATE TABLE
        "test"."users",
        "test"."settings",
        "test"."keywords",
        "test"."broadcasts",
        "test"."action_logs"
      RESTART IDENTITY;
    `)
    await prisma.$disconnect()
  })
}