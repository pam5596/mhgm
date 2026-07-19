import { SocketIOClient } from "../clients/socket.io";
import { connectionLister } from "../events/connection";
import { disconnectionLister } from "../events/disconnection";

export default function(client: SocketIOClient) {
  client.on("connection", connectionLister)
  client.on("disconnection", disconnectionLister)
}