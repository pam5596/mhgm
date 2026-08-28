import { describe, expect, it } from "vitest";
import { GoogleClient } from "../../../server/clients/google";
import { AuthPublicYoutubeBroadcastGETService } from "../../../server/services/auth_public_youtube_broadcast.get.service";
import { AuthPublicYoutubeBroadcastsGETRequestDTO } from "../../../shared/dtos/auth_public_youtube_broadcasts.get.req.dto";
import { errorHandler } from "../errorHandler.util";

describe.skip("AuthPublicYoutubeBroadcastGETServiceの結合テスト", async () => {
	const google = new GoogleClient();
	const service = new AuthPublicYoutubeBroadcastGETService(google);

	it("配信情報を取得できる", errorHandler(async () => {
		const request = new AuthPublicYoutubeBroadcastsGETRequestDTO({
			sessions: {
				access_token: "access-token",
			},
		});

		const response = await service.execute(request);
		expect(response.values).toBeTruthy();
	}));
});
