import z from "zod";
import { BaseDTO } from "./_base";
import type { PrivateActionlogsPOSTRequest } from "./interfaces/private_action_logs.post.req.dto";

export class PrivateActionlogsPOSTRequestDTO extends BaseDTO<PrivateActionlogsPOSTRequest> {
	constructor(values: PrivateActionlogsPOSTRequest) {
		super(values, PrivateActionlogsPOSTRequestDTO.schema());
	}

	static schema() {
		return z.strictObject({
			body: z.strictObject({
				message: z.string(),
				user_id: z.bigint().min(1n),
				broadcast_id: z.bigint().min(1n),
				keyword_id: z.bigint().min(1n),
			}),
		});
	}
}
