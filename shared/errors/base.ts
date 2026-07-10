export class BaseError extends Error {
  constructor(
    readonly status_code: number,
    override readonly message: string,
    readonly detail: string,
    readonly instance: string,
    override readonly stack?: string,
    readonly report?: any,
  ){
    super(message)
  }
}