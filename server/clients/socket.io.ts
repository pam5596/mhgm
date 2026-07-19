import { Server } from "socket.io";

export class SocketIOClient extends Server {
	get liveChat() {
		return this.of("/live-chat");
	}

	get member() {
		return this.of("/member");
	}
}
