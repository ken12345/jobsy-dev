#!/bin/bash
set -e

cd /root/apps/jobsy-dev

NPM="/root/.nvm/versions/node/v24.13.0/bin/npm"

echo "Pulling latest code..."
git pull origin main

echo "Installing dependencies..."
$NPM install

echo "Building project..."
$NPM run build

echo "Build complete."

echo "Clearing /var/www/jobsy..."
rm -rf /var/www/jobsy/*

echo "Deploying new build..."
cp -r dist/* /var/www/jobsy/

chown -R www-data:www-data /var/www/jobsy
chmod -R 755 /var/www/jobsy

echo "Deployment finished successfully."
