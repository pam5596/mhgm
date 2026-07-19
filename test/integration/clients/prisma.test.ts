import { afterAll, describe, expect, it } from "vitest";
import { PrismaORMClient } from "../../../server/clients/prisma";

describe("PrismaORMClient動作確認", async () => {
	it("環境変数からデータベースURLを取得できる", () => {
		console.log(process.env.DATABASE_URL);
		console.log(process.env.NODE_ENV);
		expect(process.env.DATABASE_URL).toBeTruthy();
		expect(process.env.NODE_ENV).toBeTruthy();
	});

	const client = new PrismaORMClient(
		process.env.DATABASE_URL,
		process.env.NODE_ENV,
	);

	it("データベースに正常に接続できる", async () => {
		await expect(client.$connect()).resolves.not.toThrow();
	});

	it("生クエリを実行して疎通確認ができる", async () => {
		const result = await client.$queryRaw`SELECT 1`;
		expect(result).toBeDefined();
	});
	afterAll(async () => await client.$disconnect());
});
