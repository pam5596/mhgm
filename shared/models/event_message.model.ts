import z from "zod";
import { BaseModel } from "./_base";
import type { EventMessage } from "./interfaces/event_message.interface";

export class EventMessageModel extends BaseModel<EventMessage> {
  constructor(event_message: EventMessage) {
    super(event_message, EventMessageModel.schema())
  }

  static schema() {
    return z.strictObject({
      user_id: z.int().min(1).max(2147483647),
      is_enabled: z.boolean(),
      entry_as_joiner: z.string().min(1).max(100),
      entry_as_waiter: z.string().min(1).max(100),
      duplicate_as_joiner: z.string().min(1).max(100),
      duplicate_as_waiter: z.string().min(1).max(100),
      cancel: z.string().min(1).max(100),
      updated_at: z.date().optional(),
    })
  }
}