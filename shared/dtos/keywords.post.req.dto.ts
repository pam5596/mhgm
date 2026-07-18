import z from "zod";
import { BaseDTO } from "./_base";
import type { KeywordsPOSTRequest } from "./interfaces/keywords.post.req"

export class KeywordsPOSTRequestDTO extends BaseDTO<KeywordsPOSTRequest> {
  constructor(values: KeywordsPOSTRequest) {
    super(values, KeywordsPOSTRequestDTO.schema())
  }

  private static schema() {
    return z.strictObject({
      sessions: z.strictObject({
        user: z.strictObject({
          user_id: z.number()
        })
      }),
      body: z.strictObject({
        keyword: z.string(),
        action: z.string()
      })
    })
  }
} 