import type { Socket } from "socket.io";

export const defaultLister = (socket: Socket) => {
	console.log(`Connected: ${socket.id}`);
	socket.on("disconnect", () => {
		console.log(`Disconnected: ${socket.id}`);
	})
};
