import z from "zod";
import { BaseModel } from "./_base";
import type { ActionLog } from "./interfaces/action_log.interface";

export class ActionLogModel extends BaseModel<ActionLog> {
	constructor(action_log: ActionLog) {
		super(action_log, ActionLogModel.schema());
	}

	static schema() {
		return z.strictObject({
			id: z.int().min(1).max(2147483647).optional(),
			message: z.string().min(1).max(200),
			created_at: z.date().optional(),
			user_id: z.int().min(1).max(2147483647),
			broadcast_id: z.int().min(1).max(2147483647),
			keyword_id: z.int().min(1).max(2147483647),
		});
	}
}
