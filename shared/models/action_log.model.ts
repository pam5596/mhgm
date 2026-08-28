import z from "zod";
import { BaseModel } from "./_base";
import type { ActionLog } from "./interfaces/action_log.interface";

export class ActionLogModel extends BaseModel<ActionLog> {
	constructor(action_log: ActionLog) {
		super(action_log, ActionLogModel.schema());
	}

	static schema() {
		return z.strictObject({
			id: z.bigint().min(1n).optional(),
			message: z.string().min(1).max(200),
			created_at: z.date().optional(),
			user_id: z.bigint().min(1n),
			broadcast_id: z.bigint().min(1n),
			keyword_id: z.bigint().min(1n),
		});
	}
}
