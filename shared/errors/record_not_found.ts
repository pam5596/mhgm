import { BaseError } from "./base";

export class RecordNotFoundError extends BaseError {
  constructor(
    instance: string,
    input: unknown
  ) {
    super(
      404,
      'errors.record_not_found',
      "Not Found",
      instance,
      undefined,
      input
    )
  }
}