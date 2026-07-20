import type { Socket } from "socket.io";
import { SocketAuth } from "~~/shared/types/socket_auth";

export const liveChatLister = async (socket: Socket) => {
  console.log(`Live Chat Connected: ${socket.id}`);
  const socket_auth = socket.handshake.auth as SocketAuth

  await new SocketLiveChatConnectionService(
    liveChatManageClient,
    socketIOClient!,
    userRepository,
    keywordRepository,
    actionLogRepository
  ).execute(
    new SocketLiveChatConnectionDTO({
      socket_auth
    })
  )

  socket.on("disconnect", () => {
    console.log(`Live Chat Disconnected: ${socket.id}`);
  })
};
