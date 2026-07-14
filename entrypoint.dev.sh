#!/bin/sh
# エラーが発生したら即座にスクリプトを終了させる
set -e

echo "🚀 Starting entrypoint script..."

npm install

npm run db:migrate:dev
npm run db:migrate:test

npx prisma generate

echo "🎉 Setup complete! Launching application..."
exec "$@"