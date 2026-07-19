import { Socket } from "socket.io";

export const disconnectionLister = (socket: Socket) => {
  console.log(`Disconnected: ${socket.id}`)
}