import { SocketIOClient } from "../clients/socket.io";
import { connectionLister } from "../events/connection";
import { disconnectionLister } from "../events/disconnection";
import { liveChatConnectionLister } from "../events/live-chat/connection";
import { liveChatDisconnectionLister } from "../events/live-chat/disconnection";

export default function(client: SocketIOClient) {
  client.on("connection", connectionLister)
  client.on("disconnection", disconnectionLister)
  client.liveChat.on("connection", liveChatConnectionLister)
  client.liveChat.on("disconnection", liveChatDisconnectionLister)
}