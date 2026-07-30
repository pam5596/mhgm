import { describe, expect, it } from "vitest";
import { GoogleClient } from "../../../server/clients/google";
import { AuthPublicGetYoutubeBroadcastService } from "../../../server/services/auth_public_get_youtube_broadcast.service";
import { AuthPublicYoutubeBroadcastsGETRequestDTO } from "../../../shared/dtos";

describe.skip("AuthPublicGetYoutubeBroadcastServiceの結合テスト", async () => {
	const google = new GoogleClient();
	const service = new AuthPublicGetYoutubeBroadcastService(google);

	it("配信情報を取得できる", async () => {
		const request = new AuthPublicYoutubeBroadcastsGETRequestDTO({
			sessions: {
				access_token: process.env.GOOGLE_ACCESS_TOKEN!,
			},
		});

		const response = await service.execute(request);
		expect(response.values).toBeTruthy();
	});
});
