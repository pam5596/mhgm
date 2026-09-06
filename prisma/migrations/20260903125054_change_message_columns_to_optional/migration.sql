/*
  Warnings:

  - You are about to drop the column `is_enabled` on the `event_messages` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "event_messages" DROP COLUMN "is_enabled",
ALTER COLUMN "entry_as_joiner" DROP NOT NULL,
ALTER COLUMN "entry_as_waiter" DROP NOT NULL,
ALTER COLUMN "cancel" DROP NOT NULL,
ALTER COLUMN "duplicate_as_joiner" DROP NOT NULL,
ALTER COLUMN "duplicate_as_waiter" DROP NOT NULL;
