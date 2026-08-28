import z from "zod";
import { BaseDTO } from "./_base";
import type { PrivateUsersPUTResponse } from "./interfaces/private_users.put.res.dto";

export class PrivateUsersPUTResponseDTO extends BaseDTO<PrivateUsersPUTResponse> {
	constructor(values: PrivateUsersPUTResponse) {
		super(values, PrivateUsersPUTResponseDTO.schema());
	}

	static schema() {
		return z.strictObject({
			body: z.strictObject({
				id: z.bigint().min(1n),
			}),
		});
	}
}
