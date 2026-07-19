import type { PrismaClientKnownRequestError } from "@prisma/client/runtime/client.js";
import { BaseError } from "./base";

export class CRUDFailedError extends BaseError {
	constructor(
		error: PrismaClientKnownRequestError,
		detail: string,
		instance: string,
		args: unknown,
	) {
		super(500, detail, error.message, instance, error.stack, args);
	}
}
