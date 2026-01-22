#!/bin/bash
set -e

cd /root/apps/jobsy-dev

echo "Pulling latest code..."
git pull origin main

echo "Installing dependencies..."
npm install

echo "Building project..."
npm run build

echo "Build complete."

echo "Clearing /var/www/jobsy..."
rm -rf /var/www/jobsy/*

echo "Deploying new build..."
cp -r dist/* /var/www/jobsy/

chown -R www-data:www-data /var/www/jobsy
chmod -R 755 /var/www/jobsy

echo "Deployment finished successfully."
