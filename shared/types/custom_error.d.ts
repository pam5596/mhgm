export interface CustomError {
  status_code: number
  message: string
  detail: string
  instance: string
  stack?: string
  report?: unknown
}