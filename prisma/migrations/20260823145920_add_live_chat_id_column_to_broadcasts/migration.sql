/*
  Warnings:

  - Added the required column `live_chat_id` to the `broadcasts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "broadcasts" ADD COLUMN     "live_chat_id" TEXT NOT NULL;
