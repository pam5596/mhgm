import z from "zod";
import { BaseDTO } from "./_base";
import type { BroadcastsPUTResponse } from "./interfaces/broadcasts.put.res";

export class BroadcastsPUTResponseDTO extends BaseDTO<BroadcastsPUTResponse> {
	constructor(values: BroadcastsPUTResponse) {
		super(values, BroadcastsPUTResponseDTO.schema());
	}

	private static schema() {
		return z.strictObject({
			body: z.strictObject({
				id: z.number(),
			}),
		});
	}
}
