import z from "zod";
import { BaseModel } from "./_base";
import type { Broadcast } from "./interfaces/broadcast.interface";

export class BroadcastModel extends BaseModel<Broadcast> {
	constructor(broadcast: Broadcast) {
		super(broadcast, BroadcastModel.schema());
	}

	static schema() {
		return z.strictObject({
			id: z.int().min(1).optional(),
			title: z.string().min(1).max(100),
			thumbnail: z.url({ protocol: /^https?$/ }),
			live_chat_id: z.string().min(1),
			stream_id: z.string().length(11),
			begin_at: z.date().optional(),
			end_at: z.date().nullable(),
			user_id: z.int().min(1),
		});
	}
}
