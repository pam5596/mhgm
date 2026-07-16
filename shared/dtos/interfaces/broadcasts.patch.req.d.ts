import type { BaseDTOInterface } from "./_base";

export interface BroadcastsPATCHRequest implements BaseDTOInterface {
  body: {
    end_at: Date;
  }
}