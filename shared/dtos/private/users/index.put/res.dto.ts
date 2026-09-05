import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { PrivateUsersPUTResponse } from "./put.res.dto.d";

export class PrivateUsersPUTResponseDTO extends BaseDTO<PrivateUsersPUTResponse> {
	constructor(values: PrivateUsersPUTResponse) {
		super(values, PrivateUsersPUTResponseDTO.schema());
	}

	static schema() {
		return z.strictObject({
			body: z.strictObject({
				id: z.number(),
			}),
		});
	}
}
