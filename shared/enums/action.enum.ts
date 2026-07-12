export const ActionEnum = {
  entry: "ENTRY",
  cancel: "CANCEL"
} as const

export type ActionUnion = typeof ActionEnum[keyof typeof ActionEnum];