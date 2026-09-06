import { BroadcastModel } from "~~/shared/models/broadcast.model";

export class AuthPublicYoutubeBroadcastsGETService
	implements
		BaseService<AuthPublicYoutubeBroadcastsGETRequestDTO, AuthPublicYoutubeBroadcastsGETResponseDTO>
{
	constructor(
		private googleClient: GoogleClient,
		private broadcastRepository: BroadcastRepository
	) {}

	async execute(request: AuthPublicYoutubeBroadcastsGETRequestDTO) {
		const { access_token, user_id } = request.values.sessions;

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

		const stream = google_response.data.items[0]!;
		const title = stream.snippet?.title;
		const thumbnail = stream.snippet?.thumbnails?.default?.url;
		const live_chat_id = stream.snippet?.liveChatId

		if (!title || !thumbnail || !live_chat_id)
			throw new NotFoundError(
				this.constructor.name,
				google_response.data,
				"errors.not_found.youtube_broadcast",
			);

		const broadcast = await this.broadcastRepository.upsert(
			new BroadcastModel({
				user_id,
				stream_id: stream.id!,
				live_chat_id,
				title,
				thumbnail,
				end_at: null
			})
		)

		return new AuthPublicYoutubeBroadcastsGETResponseDTO({
			body: {
				id: broadcast.values.id!,
				stream_id: stream.id!,
				title,
				thumbnail,
				live_chat_id
			},
		});
	}
}
