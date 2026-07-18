import type { SecureSessionData, User } from "#auth-utils"

export interface BaseDTOInterface {
  sessions?: {
    user?: Partial<User>,
    secure?: Partial<SecureSessionData>
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: Record<string, any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  query?: Record<string, any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: Record<string, any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  socket?: Record<string, any>
}