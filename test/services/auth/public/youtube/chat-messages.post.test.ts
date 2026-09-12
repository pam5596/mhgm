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
