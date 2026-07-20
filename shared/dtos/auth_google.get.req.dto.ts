import z from "zod";
import { BaseDTO } from "./_base";
import type { AuthGoogleGETRequest } from "./interfaces/auth_google.get.req";

export class AuthGoogleGETRequestDTO extends BaseDTO<AuthGoogleGETRequest> {
  constructor(values: AuthGoogleGETRequest) {
    super(values, AuthGoogleGETRequestDTO.schema());
  }

  private static schema() {
    return z.strictObject({
      sessions: z.strictObject({
        secure: z.strictObject({
          access_token: z.string(),
        }),
      }),
    });
  }
}
