import { BaseError } from "./base";

export class NotFoundError extends BaseError {
  constructor(
    instance: string,
    input: unknown,
    message: string = 'errors.not_found.record',
    detail: string = "Not Found"
  ) {
    super(
      404,
      message,
      detail,
      instance,
      undefined,
      input
    )
  }
}