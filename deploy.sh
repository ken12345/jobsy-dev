#!/bin/bash
set -e

export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"

cd /root/apps/jobsy-dev

echo "Pulling latest code..."
git pull origin main

echo "Installing dependencies..."
npm install

echo "Building project..."
npm run build

echo "Build complete."

# Clear old files
echo "Clearing /var/www/jobsy..."
rm -rf /var/www/jobsy/*

# Copy new build
echo "Deploying new build..."
cp -r dist/* /var/www/jobsy/

# Fix permissions
chown -R www-data:www-data /var/www/jobsy
chmod -R 755 /var/www/jobsy

echo "Deployment finished successfully."
