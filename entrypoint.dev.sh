#!/bin/sh
# エラーが発生したら即座にスクリプトを終了させる
set -e

echo "🚀 Starting entrypoint script..."

npm install

npx dotenv -e .env -- npx prisma migrate dev
npx dotenv -e .env.test -- npx prisma migrate dev

npx prisma generate

echo "🎉 Setup complete! Launching application..."
exec "$@"