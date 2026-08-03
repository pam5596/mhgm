import { describe, expect, it } from "vitest";
import { GoogleClient } from "../../../server/clients/google";

describe("PrismaORMClient動作確認", async () => {
	it("環境変数からデータベースURLを取得できる", () => {
		console.log(process.env.GOOGLE_ACCESS_TOKEN);
		expect(process.env.GOOGLE_ACCESS_TOKEN).toBeTruthy();
	});

	const client = new GoogleClient();

	it.skip("Youtubeアカウントのプロフィールを取得できる", async () => {
		const response = await client
			.youtube(process.env.GOOGLE_ACCESS_TOKEN!)
			.channels.list({
				mine: true,
				part: ["id", "snippet"],
			});

		expect(response.data.items?.length).toBe(1);
	});
});
