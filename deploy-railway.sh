#!/bin/bash

# Railway.app Deployment Guide
# Run this script or manually follow steps below

echo "🚀 Deploying to Railway.app..."

# Step 1: Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "Installing Railway CLI..."
    npm install -g @railway/cli
fi

# Step 2: Login to Railway
railway login

# Step 3: Create project
railway init

# Step 4: Set environment variables
railway variable set NODE_ENV production
railway variable set PORT 5000

# Step 5: Deploy
railway up

echo "✅ Deployment complete!"
echo "Check your Railway dashboard for the live URL"
