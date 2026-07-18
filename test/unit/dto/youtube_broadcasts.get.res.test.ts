import { describe, expect, it } from "vitest"
import { YoutubeBroadcastsGETResponseDTO } from "../../../shared/dtos/youtube_broadcasts.get.res.dto"

describe("YoutubeBroadcastsGETResponseDTOの単体テスト", () => {
  const values = {
    sessions: {
      secure: {
        access_token: "string"
      }
    },
    body: {
      title: "title",
      thumbnail: "https://thumbnail.com", 
      stream_id: "stream_id_1",
    }
  }

  it("DTOが作成できる", () => {
    expect(() => new YoutubeBroadcastsGETResponseDTO(values)).not.toThrow()
  })
})