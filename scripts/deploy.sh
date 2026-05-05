#!/bin/bash
# scripts/deploy.sh
# Idempotent script for production deployment (typically to an EC2 instance)

set -e

echo "🚀 Starting Deployment Process..."

echo "Pulling docker images"
docker compose pull

# Start services
docker compose up -d

echo "🧹 Cleaning up old images..."
docker image prune -f

echo "✅ Deployment completed successfully! 🎉"