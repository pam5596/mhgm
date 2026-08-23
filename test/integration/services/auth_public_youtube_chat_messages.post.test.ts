import { describe, it } from "vitest";
import { GoogleClient } from "../../../server/clients/google";
import { AuthPublicYoutubeChatMessagesPOSTService } from "../../../server/services/auth_public_youtube_chat_messages.post.service";
import { AuthPublicYoutubeChatMessagesPOSTRequestDTO } from "../../../shared/dtos/auth_public_youtube_chat_messages.post.req.dto";

describe.skip("AuthPublicYoutubeLiveMessagesPOSTServiceの結合テスト", async () => {
	const google = new GoogleClient();
	const service = new AuthPublicYoutubeChatMessagesPOSTService(google);

	it("コメントを送信できる", async () => {
		const request = new AuthPublicYoutubeChatMessagesPOSTRequestDTO({
			sessions: {
				access_token: process.env.GOOGLE_ACCESS_TOKEN!,
			},
			body: {
				live_chat_id: process.env.GOOGLE_LIVE_CHAT_ID!,
				message: 'hello'
			}
		});

		await service.execute(request)
	});
});
