#!/bin/bash

cd /root/apps/jobsy-dev || exit

echo "Pulling latest code..."
git pull origin main

echo "Installing dependencies..."
npm install

echo "Building project..."
npm run build

echo "Build complete. Dist updated."
