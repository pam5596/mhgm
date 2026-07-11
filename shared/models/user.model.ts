import z from "zod";
import { BaseModel } from "./_base";
import type { User } from "./interfaces/user.interface";

export class UserModel extends BaseModel<User> implements User {
  readonly id?: number;
  readonly channel_id!: string;
  readonly name!: string;
  readonly avatar!: string;
  readonly created_at?: Date;
  
  constructor(user: User) {
    super(user, UserModel.schema())
    Object.assign(this, user)
  }

  private static schema() {
    return z.object({
      id: z.int().optional(),
      channel_id: z.string().length(24),
      name: z.string().min(1),
      avatar: z.url({ protocol: /^https?$/ }),
      created_at: z.date().optional()
    })
  }

  override toObject(): User {
    return {
      id: this.id,
      channel_id: this.channel_id,
      name: this.name,
      avatar: this.avatar,
      created_at: this.created_at
    }
  }
}