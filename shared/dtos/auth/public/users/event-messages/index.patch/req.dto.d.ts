export interface AuthPublicUsersEventMessagesPATCHRequest {
  sessions: {
    user_id: number;
  };
  body: {
    entry_as_joiner: string | null;
    entry_as_waiter: string | null;
    duplicate_as_joiner: string | null;
    duplicate_as_waiter: string | null;
    cancel: string | null;
  }
}