import { BaseError } from "./base";

export class ForbiddenError<I> extends BaseError {
  constructor(
    instance: string,
    input: unknown
  ) {
    super(
      404,
      'errors.forbidden',
      "Forbidden",
      instance,
      undefined,
      input
    )
  }
}