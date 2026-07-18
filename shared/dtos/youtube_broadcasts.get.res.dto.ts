import z from "zod";
import { BaseDTO } from "./_base";
import type { YoutubeBroadcastsGETResponse } from "../dtos/interfaces/youtube_broadcasts.get.res"

export class YoutubeBroadcastsGETResponseDTO extends BaseDTO<YoutubeBroadcastsGETResponse> {
  constructor(values: YoutubeBroadcastsGETResponse) {
    super(values, YoutubeBroadcastsGETResponseDTO.schema())
  }

  private static schema() {
    return z.strictObject({
      sessions: z.strictObject({
        secure: z.strictObject({
          access_token: z.string()
        })
      }),
      body: z.strictObject({
        stream_id: z.string(),
        title: z.string(),
        thumbnail: z.string()
      }),
    })
  }
} 