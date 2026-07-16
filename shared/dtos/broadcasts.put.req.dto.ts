import z from "zod";
import { BaseDTO } from "./_base";
import type { BroadcastsPUTRequest } from "./interfaces/broadcasts.put.req"

export class BroadcastsPUTRequestDTO extends BaseDTO<BroadcastsPUTRequest> {
  constructor(values: BroadcastsPUTRequest) {
    super(values, BroadcastsPUTRequestDTO.schema())
  }

  private static schema() {
    return z.strictObject({
      body: z.strictObject({
        stream_id: z.string(),
        title: z.string(),
        thumbnail: z.string()
      }),
    })
  }
} 