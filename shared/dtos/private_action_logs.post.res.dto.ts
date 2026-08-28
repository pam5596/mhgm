import z from "zod";
import { BaseDTO } from "./_base";
import type { PrivateActionlogsPOSTResponse } from "./interfaces/private_action_logs.post.res.dto";

export class PrivateActionlogsPOSTResponseDTO extends BaseDTO<PrivateActionlogsPOSTResponse> {
	constructor(values: PrivateActionlogsPOSTResponse) {
		super(values, PrivateActionlogsPOSTResponseDTO.schema());
	}

	static schema() {
		return z.strictObject({
			body: z.strictObject({
				id: z.bigint().min(1n),
			}),
		});
	}
}
