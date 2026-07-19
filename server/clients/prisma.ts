import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../prisma/generated/client";

export class PrismaORMClient extends PrismaClient {
	constructor(connectionString?: string, schema?: string) {
		super({
			adapter: new PrismaPg({ connectionString }, { schema }),
		});
	}
}
