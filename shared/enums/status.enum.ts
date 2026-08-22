export const StatusEnum = {
	join: "JOIN",
	wait: "WAIT",
} as const;

export type StatusUnion = (typeof StatusEnum)[keyof typeof StatusEnum];
