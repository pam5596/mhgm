import { YoutubeBroadcastsGETRequestDTO } from "../../shared/dtos/youtube_broadcasts.get.req.dto";
import { BaseService } from "./_base";
import { YoutubeBroadcastsGETResponseDTO } from "../../shared/dtos/youtube_broadcasts.get.res.dto";
import { GoogleClient } from "../clients/google";
import { NotFoundError } from "../../shared/errors/not_found";

export class GetYoutubeBroadcastService implements BaseService<
  YoutubeBroadcastsGETRequestDTO,
  YoutubeBroadcastsGETResponseDTO
> {
  constructor(
    private googleClient: GoogleClient
  ) {}

  async execute(request: YoutubeBroadcastsGETRequestDTO) {
    const { access_token } = request.values.sessions.secure

    const google_response = await this.googleClient.youtube(access_token).liveBroadcasts.list({
      mine: true,
      maxResults: 1,
      part: ["snippet"]
    })

    if (!google_response.data.items) throw new NotFoundError(
      this.constructor.name, 
      google_response.data, 
      "errors.not_found.youtube_channel"
    )

    if (!google_response.data.items.length) throw new NotFoundError(
      this.constructor.name, 
      google_response.data, 
      "errors.not_found.youtube_broadcast"
    )

    const broadcast = google_response.data.items[0]!

    return new YoutubeBroadcastsGETResponseDTO({
      body: {
        stream_id: broadcast.id,
        title: broadcast.snippet?.title,
        thumbnail: broadcast.snippet?.thumbnails?.default?.url
      }
    })
  }
}