import { Socket } from "socket.io";

export const liveChatDisconnectionLister = (socket: Socket) => {
  console.log(`Live Chat Disconnected: ${socket.id}`)
}