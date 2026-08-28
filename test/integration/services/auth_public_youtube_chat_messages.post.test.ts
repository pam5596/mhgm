import { describe, it } from "vitest";
import { GoogleClient } from "../../../server/clients/google";
import { AuthPublicYoutubeChatMessagesPOSTService } from "../../../server/services/auth_public_youtube_chat_messages.post.service";
import { AuthPublicYoutubeChatMessagesPOSTRequestDTO } from "../../../shared/dtos/auth_public_youtube_chat_messages.post.req.dto";
import { errorHandler } from "../errorHandler.util";

describe.skip("AuthPublicYoutubeLiveMessagesPOSTServiceの結合テスト", async () => {
	const google = new GoogleClient();
	const service = new AuthPublicYoutubeChatMessagesPOSTService(google);

	it("コメントを送信できる", errorHandler(async () => {
		const request = new AuthPublicYoutubeChatMessagesPOSTRequestDTO({
			sessions: {
				access_token: "access-token",
			},
			body: {
				live_chat_id: "live-chat-id",
				message: "message",
			},
		});

		await service.execute(request)
	}));
});
