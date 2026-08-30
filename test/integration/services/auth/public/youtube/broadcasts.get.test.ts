describe.skip("AuthPublicYoutubeBroadcastsGETServiceの結合テスト", async () => {
	const google = new GoogleClient();
	const service = new AuthPublicYoutubeBroadcastsGETService(google);

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
