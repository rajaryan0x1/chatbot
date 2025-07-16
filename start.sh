#!/bin/bash

echo "🚀 Starting College Helpdesk AI Application..."

# Function to kill background processes on exit
cleanup() {
    echo "🛑 Stopping servers..."
    kill $(jobs -p) 2>/dev/null
    exit
}

# Set trap to cleanup on script exit
trap cleanup SIGINT SIGTERM

# Start backend server
echo "📡 Starting backend server..."
cd backend
npm start &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start frontend server
echo "🎨 Starting frontend development server..."
cd ../frontend
npm run dev -- --host &
FRONTEND_PID=$!

echo "✅ Both servers are starting..."
echo "📡 Backend API: http://localhost:3000"
echo "🎨 Frontend App: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for background processes
wait
