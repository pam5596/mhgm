import { Socket } from "socket.io";

export const connectionLister = (socket: Socket) => {
  console.log(`Connected: ${socket.id}`)
}