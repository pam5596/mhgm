import { BaseError } from "./base";

export class UnknownError extends BaseError {
	constructor(catched: unknown, instance: string, report?: unknown) {
		super(
			500,
			"errors.unknown",
			String(catched),
			instance,
			catched instanceof Error ? catched.stack : undefined,
			report,
		);
	}
}
