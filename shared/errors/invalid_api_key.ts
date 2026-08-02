import { BaseError } from "./base";

export class InvalidApiKeyError extends BaseError {
  constructor(
    input: unknown,
    message: string = "errors.invalid_api_key",
    detail: string = "Invalid API Key",
  ) {
    super(401, message, detail, 'InvalidApiKeyError', undefined, input);
  }
}
