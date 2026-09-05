import z from "zod";
import { BaseDTO } from "~~/shared/dtos/_base";
import type { AuthPublicUsersEventMessagesPATCHRequest } from "./req.dto.d";

export class AuthPublicUsersEventMessagesPATCHRequestDTO extends BaseDTO<AuthPublicUsersEventMessagesPATCHRequest> {
  constructor(values: AuthPublicUsersEventMessagesPATCHRequest) {
    super(values, AuthPublicUsersEventMessagesPATCHRequestDTO.schema());
  }

  static schema() {
    return z.strictObject({
      sessions: z.strictObject({
        user_id: z.number(),
      }),
      body: z.strictObject({
        entry_as_joiner: z.string().nullable(),
        entry_as_waiter: z.string().nullable(),
        duplicate_as_joiner: z.string().nullable(),
        duplicate_as_waiter: z.string().nullable(),
        cancel: z.string().nullable()
      })
    });
  }
}