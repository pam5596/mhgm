import type { BaseDTOInterface } from "./_base";
import type { Broadcast } from "../../shared/models/interfaces/broadcast";

export interface BroadcastsPUTRequest implements BaseDTOInterface {
  body: {
    stream_id: Broadcast["stream_id"],
    title: Broadcast["title"],
    thumbnail: Broadcast["thumbnail"]
  }
}