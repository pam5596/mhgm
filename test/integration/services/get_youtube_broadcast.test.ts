import { describe, expect, it } from "vitest";
import { GoogleClient } from "../../../server/clients/google";
import { GetYoutubeBroadcastService } from "../../../server/services/get_youtube_broadcast.service";
import { YoutubeBroadcastsGETRequestDTO } from "../../../shared/dtos/youtube_broadcasts.get.req.dto";

describe("GetYoutubeBroadcastServiceの結合テスト", async () => {
	const google = new GoogleClient();
	const service = new GetYoutubeBroadcastService(google);

	it("配信情報を取得できる", async () => {
		const request = new YoutubeBroadcastsGETRequestDTO({
			sessions: {
				secure: {
					access_token: process.env.GOOGLE_ACCESS_TOKEN!,
				},
			},
		});

		const response = await service.execute(request);
		expect(response.values).toBeTruthy();
	});
});
