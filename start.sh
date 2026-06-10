#!/bin/bash
set -e

# Start Vite in background on port 5173
npm run dev &
VITE_PID=$!

# Start PHP server on port 5000
php artisan serve --host=0.0.0.0 --port=5000

# Clean up vite on exit
kill $VITE_PID 2>/dev/null || true
