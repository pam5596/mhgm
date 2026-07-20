import z, { type ZodError } from "zod";
import { BaseError } from "./base";

export class ParameterMissingError<I> extends BaseError {
	constructor(detail: string, instance: string, stack?: string, input?: I) {
		super(
			400,
			"errors.parameter_missing",
			detail,
			instance,
			stack,
			input,
		);
	}
}
