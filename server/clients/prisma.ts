import { PrismaClient } from "../../prisma/generated/client";
import { PrismaPg } from "@prisma/adapter-pg"

export class PrismaORMClient extends PrismaClient {
  constructor(connectionString?: string, schema?: string) {
    super({
      adapter: new PrismaPg({ connectionString }, { schema })
    })
  }
}