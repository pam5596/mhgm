import { type ZodError, z } from "zod";
import { BaseError } from "./base";

export class ValidateError<I> extends BaseError {
	constructor(error: ZodError, instance: string, input: I) {
		super(
			422,
			`errors.validate.invalid_${error.issues[0]?.path}`,
			z.prettifyError(error),
			instance,
			error.stack,
			input,
		);
	}
}
