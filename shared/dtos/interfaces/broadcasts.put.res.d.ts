import type { BaseDTOInterface } from "./_base";
import type { Broadcast } from "../../shared/models/interfaces/broadcast";

export interface BroadcastsPUTResponse implements BaseDTOInterface {
  body: {
    id: Broadcast["id"]
  }
}