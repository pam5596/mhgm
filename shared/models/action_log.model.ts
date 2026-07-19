import z from "zod";
import { BaseModel } from "./_base";
import type { ActionLog } from "./interfaces/action_log.interface";

export class ActionLogModel extends BaseModel<ActionLog> implements ActionLog {
	readonly id?: number;
	readonly message!: string;
	readonly created_at?: Date;
	readonly user_id!: number;
	readonly broadcast_id!: number;
	readonly keyword_id!: number;

	constructor(action_log: ActionLog) {
		super(action_log, ActionLogModel.schema());
		Object.assign(this, action_log);
	}

	private static schema() {
		return z.strictObject({
			id: z.int().optional(),
			message: z.string().min(1).max(200),
			created_at: z.date().optional(),
			user_id: z.int(),
			broadcast_id: z.int(),
			keyword_id: z.int(),
		});
	}

	override toObject(): ActionLog {
		return {
			id: this.id,
			message: this.message,
			created_at: this.created_at,
			user_id: this.user_id,
			broadcast_id: this.broadcast_id,
			keyword_id: this.keyword_id,
		};
	}
}
