export interface Keyword {
	id?: bigint;
	keyword: string;
	action: "ENTRY" | "CANCEL";
	created_at?: Date;
	user_id: bigint;
}
