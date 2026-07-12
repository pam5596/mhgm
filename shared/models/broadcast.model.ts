import z from "zod";
import { BaseModel } from "./_base";
import type { Broadcast } from "./interfaces/broadcast.interface";

export class BroadcastModel extends BaseModel<Broadcast> implements Broadcast {
  readonly id?: number;
  readonly title!: string;
  readonly thumbnail!: string;
  readonly stream_id!: string;
  readonly begin_at!: Date;
  readonly end_at?: Date;
  readonly user_id!: number;

  constructor(broadcast: Broadcast) {
    super(broadcast, BroadcastModel.schema())
    Object.assign(this, broadcast)
  }

  private static schema() {
    return z.object({
      id: z.int().optional(),
      title: z.string().min(1).max(100),
      thumbnail: z.url({ protocol: /^https?$/ }),
      stream_id: z.string().length(11),
      begin_at: z.date(),
      end_at: z.date().optional(),
      user_id: z.int(),
    })
  }

  updateEndAt(end_at: Date) {
    return new BroadcastModel({
      id: this.id,
      title: this.title,
      thumbnail: this.thumbnail,
      stream_id: this.stream_id,
      begin_at: this.begin_at,
      end_at,
      user_id: this.user_id
    })
  }

  override toObject(): Broadcast {
    return {
      id: this.id,
      title: this.title,
      thumbnail: this.thumbnail,
      stream_id: this.stream_id,
      begin_at: this.begin_at,
      end_at: this.end_at,
      user_id: this.user_id
    }
  }
}