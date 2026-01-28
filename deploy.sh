#!/bin/bash
set -e

echo "🚀 Starting deployment..."

# Load NVM
export NVM_DIR="/root/.nvm"
source "$NVM_DIR/nvm.sh"

# Use Node version
nvm use 24

echo "Node: $(node -v)"
echo "NPM: $(npm -v)"

APP_DIR="/root/apps/jobsy-dev"
DEPLOY_DIR="/var/www/jobsy"
BRANCH="main"

cd "$APP_DIR"

echo "🔄 Fetching latest code..."
git fetch origin
git reset --hard origin/$BRANCH

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building project..."
npm run build

echo "🧹 Clearing deploy directory..."
rm -rf "$DEPLOY_DIR"/*

echo "📂 Copying new build..."
cp -r dist/* "$DEPLOY_DIR"/

echo "🔐 Fixing permissions..."
chown -R www-data:www-data "$DEPLOY_DIR"
chmod -R 755 "$DEPLOY_DIR"

echo "✅ Deployment finished successfully!"
