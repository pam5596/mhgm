/*
  Warnings:

  - Added the required column `duplicate_as_joiner` to the `event_messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duplicate_as_waiter` to the `event_messages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "event_messages" ADD COLUMN     "duplicate_as_joiner" VARCHAR(100) NOT NULL,
ADD COLUMN     "duplicate_as_waiter" VARCHAR(100) NOT NULL;
