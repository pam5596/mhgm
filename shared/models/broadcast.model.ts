import z from "zod";
import { BaseModel } from "./_base";
import type { Broadcast } from "./interfaces/broadcast.interface";

export class BroadcastModel extends BaseModel<Broadcast> {
	constructor(broadcast: Broadcast) {
		super(broadcast, BroadcastModel.schema());
	}

	private static schema() {
		return z.strictObject({
			id: z.int().optional(),
			title: z.string().min(1).max(100),
			thumbnail: z.url({ protocol: /^https?$/ }),
			stream_id: z.string().length(11),
			begin_at: z.date().optional(),
			end_at: z.date().nullable(),
			user_id: z.int(),
		});
	}

	updateEndAt(end_at: Date) {
		return new BroadcastModel({
			...this.values,
			end_at,
		});
	}
}
