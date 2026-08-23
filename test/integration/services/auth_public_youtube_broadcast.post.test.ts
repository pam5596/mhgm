import { describe, expect, it } from "vitest";
import { GoogleClient } from "../../../server/clients/google";
import { AuthPublicYoutubeLiveMessagesPOSTService } from "../../../server/services/auth_public_youtube_chat_messages.post.service";
import { AuthPublicYoutubeChatMessagesPOSTRequestDTO } from "../../../shared/dtos/auth_public_youtube_chat_messages.post.req.dto";

describe.skip("AuthPublicYoutubeLiveMessagesPOSTServiceの結合テスト", async () => {
	const google = new GoogleClient();
	const service = new AuthPublicYoutubeLiveMessagesPOSTService(google);

	it("配信情報を取得できる", async () => {
		const request = new AuthPublicYoutubeChatMessagesPOSTRequestDTO({
			sessions: {
				access_token: process.env.GOOGLE_ACCESS_TOKEN!,
			},
			body: {
				live_chat_id: process.env.GOOGLE_LIVE_CHAT_ID!,
				message: 'hello'
			}
		});

		expect(async () => await service.execute(request)).not.toThrow()
	});
});
