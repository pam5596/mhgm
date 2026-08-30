export class AuthPublicYoutubeBroadcastsGETService
	implements
		BaseService<AuthPublicYoutubeBroadcastsGETRequestDTO, AuthPublicYoutubeBroadcastsGETResponseDTO>
{
	constructor(private googleClient: GoogleClient) {}

	async execute(request: AuthPublicYoutubeBroadcastsGETRequestDTO) {
		const { access_token } = request.values.sessions;

		const google_response = await this.googleClient
			.youtube(access_token)
			.liveBroadcasts.list({
				maxResults: 1,
				broadcastStatus: "active",
				part: ["snippet"],
			});

		if (!google_response.data.items)
			throw new NotFoundError(
				this.constructor.name,
				google_response.data,
				"errors.not_found.youtube_channel",
			);

		if (!google_response.data.items.length)
			throw new NotFoundError(
				this.constructor.name,
				google_response.data,
				"errors.not_found.youtube_broadcast",
			);

		const broadcast = google_response.data.items[0]!;
		const title = broadcast.snippet?.title;
		const thumbnail = broadcast.snippet?.thumbnails?.default?.url;
		const live_chat_id = broadcast.snippet?.liveChatId

		if (!title || !thumbnail || !live_chat_id)
			throw new NotFoundError(
				this.constructor.name,
				google_response.data,
				"errors.not_found.youtube_broadcast",
			);

		return new AuthPublicYoutubeBroadcastsGETResponseDTO({
			body: {
				stream_id: broadcast.id!,
				title,
				thumbnail,
				live_chat_id
			},
		});
	}
}
