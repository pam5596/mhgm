import type { Server as HTTPServer } from "node:http";
import { SocketIOClient } from "../clients/socket.io";

// eslint-disable-next-line import/no-mutable-exports
export let socketIOClient: SocketIOClient | null = null;
export function initSocketIOAsHooks(server: HTTPServer) {
	const io = new SocketIOClient(server);
	socketIOClient = io;
}
