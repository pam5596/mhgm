import { test } from "vitest";
import { PrismaClient } from "@prisma/generated";
import { PrismaPg } from "@prisma/adapter-pg"

test("PrismaClient動作確認", async () => {
  console.log(process.env.DATABASE_URL)
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
  const client = new PrismaClient({ adapter })

  const tables = await client.$executeRaw`
    SELECT table_name
    FROM information_schema.tables
    WHERE table_type = 'BASE TABLE'
    AND table_schema = 'develop'
    ORDER BY table_name;
  `

  console.log(tables)
})