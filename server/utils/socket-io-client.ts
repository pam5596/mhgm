import { SocketIOClient } from "../clients/socket.io";
import { Server as HTTPServer } from "node:http"

export let socketIOClient: SocketIOClient | null = null
export function initSocketIOAsHooks(server: HTTPServer) {
  const io = new SocketIOClient(server)
  socketIOClient = io
}