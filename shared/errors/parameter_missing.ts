import z, { type ZodError } from "zod";
import { BaseError } from "./base";

export class ParameterMissingError<I> extends BaseError {
  constructor(
    error: ZodError,
    instance: string,
    input: I
  ) {
    super(
      400,
      'errors.parameter_missing',
      z.prettifyError(error),
      instance,
      error.stack,
      input
    )
  }
}