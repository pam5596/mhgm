import type { Server as HTTPServer } from "node:http";
import { Server, type ServerOptions } from "socket.io";

export class SocketIOClient extends Server {
	constructor(server: HTTPServer, opts?: Partial<ServerOptions>) {
		super(server, opts);
	}

	get liveChat() {
		return this.of("/live-chat");
	}

	get member() {
		return this.of("/member");
	}
}
