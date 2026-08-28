/*
  Warnings:

  - The primary key for the `action_logs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `broadcasts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `keywords` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `settings` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "action_logs" DROP CONSTRAINT "action_logs_broadcast_id_fkey";

-- DropForeignKey
ALTER TABLE "action_logs" DROP CONSTRAINT "action_logs_keyword_id_fkey";

-- DropForeignKey
ALTER TABLE "action_logs" DROP CONSTRAINT "action_logs_user_id_fkey";

-- DropForeignKey
ALTER TABLE "broadcasts" DROP CONSTRAINT "broadcasts_user_id_fkey";

-- DropForeignKey
ALTER TABLE "keywords" DROP CONSTRAINT "keywords_user_id_fkey";

-- DropForeignKey
ALTER TABLE "settings" DROP CONSTRAINT "settings_user_id_fkey";

-- AlterTable
ALTER TABLE "action_logs" DROP CONSTRAINT "action_logs_pkey",
ALTER COLUMN "id" SET DATA TYPE BIGINT,
ALTER COLUMN "user_id" SET DATA TYPE BIGINT,
ALTER COLUMN "broadcast_id" SET DATA TYPE BIGINT,
ALTER COLUMN "keyword_id" SET DATA TYPE BIGINT,
ADD CONSTRAINT "action_logs_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "broadcasts" DROP CONSTRAINT "broadcasts_pkey",
ALTER COLUMN "id" SET DATA TYPE BIGINT,
ALTER COLUMN "user_id" SET DATA TYPE BIGINT,
ADD CONSTRAINT "broadcasts_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "keywords" DROP CONSTRAINT "keywords_pkey",
ALTER COLUMN "id" SET DATA TYPE BIGINT,
ALTER COLUMN "user_id" SET DATA TYPE BIGINT,
ADD CONSTRAINT "keywords_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "settings" DROP CONSTRAINT "settings_pkey",
ALTER COLUMN "user_id" SET DATA TYPE BIGINT,
ADD CONSTRAINT "settings_pkey" PRIMARY KEY ("user_id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ALTER COLUMN "id" SET DATA TYPE BIGINT,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "settings" ADD CONSTRAINT "settings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "keywords" ADD CONSTRAINT "keywords_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "broadcasts" ADD CONSTRAINT "broadcasts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "action_logs" ADD CONSTRAINT "action_logs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "action_logs" ADD CONSTRAINT "action_logs_broadcast_id_fkey" FOREIGN KEY ("broadcast_id") REFERENCES "broadcasts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "action_logs" ADD CONSTRAINT "action_logs_keyword_id_fkey" FOREIGN KEY ("keyword_id") REFERENCES "keywords"("id") ON DELETE CASCADE ON UPDATE CASCADE;
