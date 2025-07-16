# College Helpdesk AI Chatbot

A full-stack AI-powered chatbot application for college student assistance, built with React, Tailwind CSS, and Express.js.

## Features

- 🤖 AI-powered responses using Google Gemini API
- 💬 Real-time chat interface
- 📱 Responsive design with modern UI
- 🎯 Quick prompt suggestions
- 📚 Handles queries about exams, fees, hostel, events, and more
- 🔄 Smart fallback to mock responses if API is unavailable
- 🏫 Customizable college information

## Tech Stack

### Frontend
- React 18 with Vite
- Tailwind CSS for styling
- Axios for API calls
- React Router for navigation

### Backend
- Node.js with Express.js
- Google Gemini AI integration
- CORS enabled for cross-origin requests
- RESTful API design
- Environment-based configuration
- Smart fallback system

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository and navigate to the project folder:

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. **Configure Gemini API (Optional but Recommended):**
   - Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Copy `.env.example` to `.env` in the backend folder
   - Add your API key: `GEMINI_API_KEY=your_api_key_here`
   - See [GEMINI_SETUP.md](GEMINI_SETUP.md) for detailed instructions

### Running the Application

#### Option 1: Use the Startup Script (Recommended)
```bash
./start.sh
```

#### Option 2: Manual Startup

1. Start the backend server:
```bash
cd backend
npm start
```

2. In a new terminal, start the frontend:
```bash
cd frontend
npm run dev
```

### Accessing the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **Health Check**: http://localhost:3000/api/health

## API Endpoints

### Health Check
- **GET** `/api/health` - Check if the server is running

### Chat
- **POST** `/api/chat` - Send a message to the AI chatbot
  - Request body: `{ "message": "your question here" }`
  - Response: `{ "reply": "AI response", "timestamp": "ISO string" }`

## Project Structure

```
overlord/
├── backend/
│   ├── server.js          # Express server with API endpoints
│   ├── package.json       # Backend dependencies
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── utils/         # API utilities
│   │   └── ...
│   ├── package.json       # Frontend dependencies
│   └── ...
├── start.sh              # Startup script
└── README.md            # This file
```

## Development

### Available Scripts

#### Backend
- `npm start` - Start the production server
- `npm run dev` - Start with nodemon for development

#### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Adding New Features

1. **Backend**: Add new API endpoints in `backend/server.js`
2. **Frontend**: Update `frontend/src/utils/api.js` for new API calls
3. **UI**: Add new components in `frontend/src/components/`

## Deployment

The application is designed to be easily deployable:

- **Backend**: Can be deployed to services like Heroku, Railway, or any Node.js hosting
- **Frontend**: Can be deployed to Vercel, Netlify, or any static hosting service

## Future Enhancements

- Integration with actual AI services (OpenAI, Google Gemini, etc.)
- User authentication and session management
- Database integration for conversation history
- File upload capabilities
- Multi-language support
- Voice input/output features

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
