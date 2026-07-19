import { Server, type ServerOptions } from "socket.io"
import { Server as HTTPServer } from "node:http"

export class SocketIOClient extends Server {
  constructor(server: HTTPServer, opts?: Partial<ServerOptions>) {
    super(server, opts)
  }
}