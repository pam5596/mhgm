import type { SocketIOClient } from "../clients/socket.io";
import { defaultLister } from "../events/default";
import { liveChatLister } from "../events/live_chat";

export default function (client: SocketIOClient) {
	client.on("connection", defaultLister);
	client.liveChat.on("connection", liveChatLister);
}
