export class BaseError extends Error {
	constructor(
		readonly status_code: number,
		override readonly message: string,
		readonly detail: string,
		readonly instance: string,
		override readonly stack?: string,
		readonly report?: unknown,
	) {
		super(message);
		if (stack) this.stack = stack;
	}

	toJson() {
		return {
			status_code: this.status_code,
			message: this.message,
			detail: this.detail,
			instance: this.instance,
			stack: this.stack,
			report: this.report
		}
	}
}
