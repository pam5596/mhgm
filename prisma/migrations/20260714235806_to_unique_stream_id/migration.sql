/*
  Warnings:

  - A unique constraint covering the columns `[stream_id]` on the table `broadcasts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "broadcasts_stream_id_key" ON "broadcasts"("stream_id");
