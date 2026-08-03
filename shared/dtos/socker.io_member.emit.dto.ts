import z from "zod";
import { BaseDTO } from "./_base";
import type { SocketIOMemberEmit } from "./interfaces/socker.io_member.emit.dto";

export class SocketIOMemberEmitDTO extends BaseDTO<SocketIOMemberEmit> {
	constructor(values: SocketIOMemberEmit) {
		super(values, SocketIOMemberEmitDTO.schema());
	}

	private static schema() {
		return z.strictObject({
			users: z.array(
				z.strictObject({
					channel_id: z.string(),
					name: z.string(),
					avatar: z.string(),
					status: z.string(),
					join_quests: z.number(),
					wait_quests: z.number(),
				}),
			),
		});
	}
}
