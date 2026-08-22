import { google } from "googleapis";
import { OAuth2Client } from "googleapis-common";

export class GoogleClient {
	youtube(access_token: string) {
		return google.youtube({
			version: "v3",
			auth: new OAuth2Client({
				credentials: { access_token },
			}),
		});
	}
}
