import z from "zod";
import { BaseDTO } from "./_base";
import type { KeywordsPATCHRequest } from "./interfaces/keywords.patch.req"

export class KeywordsPATCHRequestDTO extends BaseDTO<KeywordsPATCHRequest> {
  constructor(values: KeywordsPATCHRequest) {
    super(values, KeywordsPATCHRequestDTO.schema())
  }

  private static schema() {
    return z.strictObject({
      sessions: z.strictObject({
        user: z.strictObject({
          user_id: z.number()
        })
      }),
      params: z.strictObject({
        id: z.coerce.number()
      }),
      body: z.strictObject({
        keyword: z.string(),
      })
    })
  }
} 