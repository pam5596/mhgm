import z from "zod";
import type { YoutubeBroadcastsGETResponse } from "../dtos/interfaces/youtube_broadcasts.get.res";
import { BaseDTO } from "./_base";

export class YoutubeBroadcastsGETResponseDTO extends BaseDTO<YoutubeBroadcastsGETResponse> {
	constructor(values: YoutubeBroadcastsGETResponse) {
		super(values, YoutubeBroadcastsGETResponseDTO.schema());
	}

	private static schema() {
		return z.strictObject({
			body: z.strictObject({
				stream_id: z.string(),
				title: z.string(),
				thumbnail: z.string(),
			}),
		});
	}
}
