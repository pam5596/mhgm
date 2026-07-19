import { LiveChat } from "youtube-chat";
import type { ChatItem } from "youtube-chat/dist/types/data";

export class LiveChatManageClient {
	private pool = new Map<string, LiveChat>();

	async subscribe(stream_id: string, onChatCallback: (chat: ChatItem) => void) {
		if (this.pool.has(stream_id)) return;

		const client = new LiveChat({ liveId: stream_id });
		client.on("chat", onChatCallback);
		client.on("error", (error) => {
			throw new UnknownError(error, this.constructor.name);
		});

		const is_started = await client.start();
		if (is_started) {
			this.pool.set(stream_id, client);
		} else {
			throw new UnknownError(client, this.constructor.name);
		}
	}

	async unsubscribe(stream_id: string) {
		const client = this.pool.get(stream_id);
		if (!client) return;

		client.stop();
		this.pool.delete(stream_id);
	}
}
