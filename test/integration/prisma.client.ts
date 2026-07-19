import { PrismaORMClient } from "../../server/clients/prisma";

export const prisma = new PrismaORMClient(
	process.env.DATABASE_URL,
	process.env.NODE_ENV,
);
