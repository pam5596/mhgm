import { google } from "googleapis"
import { OAuth2Client } from "googleapis-common";

export class GoogleClient extends OAuth2Client {
  constructor(access_token: string) {
    super({
      credentials: {
        access_token
      }
    })
  }

  youtube() {
    return google.youtube({
      version: 'v3',
      auth: this
    })
  }
}