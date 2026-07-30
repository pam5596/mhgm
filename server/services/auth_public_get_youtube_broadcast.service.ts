import { AuthPublicYoutubeBroadcastsGETRequestDTO, AuthPublicYoutubeBroadcastsGETResponseDTO } from "../../shared/dtos";
import { NotFoundError } from "../../shared/errors/not_found";
import type { GoogleClient } from "../clients/google";
import type { BaseService } from "./_base";

export class AuthPublicGetYoutubeBroadcastService
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

		return new AuthPublicYoutubeBroadcastsGETResponseDTO({
			body: {
				stream_id: broadcast.id!,
				title: broadcast.snippet?.title!,
				thumbnail: broadcast.snippet?.thumbnails?.default?.url!,
			},
		});
	}
}
