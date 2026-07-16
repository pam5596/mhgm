import z from "zod";
import { BaseDTO } from "./_base";
import type { BroadcastsPATCHRequest } from "./interfaces/broadcasts.patch.req"

export class BroadcastsPATCHRequestDTO extends BaseDTO<BroadcastsPATCHRequest> {
  constructor(values: BroadcastsPATCHRequest) {
    super(values, BroadcastsPATCHRequestDTO.schema())
  }

  private static schema() {
    return z.strictObject({
      body: z.strictObject({
        end_at: z.date()
      }),
    })
  }
} 