-- CreateTable
CREATE TABLE "event_messages" (
    "user_id" INTEGER NOT NULL,
    "is_enabled" BOOLEAN NOT NULL DEFAULT true,
    "entry_as_joiner" VARCHAR(100) NOT NULL,
    "entry_as_waiter" VARCHAR(100) NOT NULL,
    "cancel" VARCHAR(100) NOT NULL,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "event_messages_pkey" PRIMARY KEY ("user_id")
);

-- AddForeignKey
ALTER TABLE "event_messages" ADD CONSTRAINT "event_messages_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
