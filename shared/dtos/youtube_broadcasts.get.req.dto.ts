import z from "zod";
import { BaseDTO } from "./_base";
import type { YoutubeBroadcastsGETRequest } from "../dtos/interfaces/youtube_broadcasts.get.req"

export class YoutubeBroadcastsGETRequestDTO extends BaseDTO<YoutubeBroadcastsGETRequest> {
  constructor(values: YoutubeBroadcastsGETRequest) {
    super(values, YoutubeBroadcastsGETRequestDTO.schema())
  }

  private static schema() {
    return z.strictObject({
      sessions: z.strictObject({
        secure: z.strictObject({
          access_token: z.string()
        })
      }),
    })
  }
} 