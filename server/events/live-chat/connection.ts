import { Socket } from "socket.io";

export const liveChatConnectionLister = (socket: Socket) => {
  console.log(`Live Chat Connected: ${socket.id}`)
}