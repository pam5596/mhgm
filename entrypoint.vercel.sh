#!/bin/sh
# entrypoint.vercel.sh
set -e

echo "🚀 Starting entrypoint script..."

echo "Running DB migration..."
npm run migrate

echo "Starting server..."
exec node .output/server/index.mjs

echo "🎉 Setup complete! Launching application..."