// backend for ai chat bot for which the frontend is built using React and Tailwind CSS can can be found at ../frontend folder

require('dotenv').config()
const express = require("express")
const cors = require("cors")
const { GoogleGenerativeAI } = require("@google/generative-ai")

const app = express()
const port = process.env.PORT || 3000

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

app.use(cors())
app.use(express.json())


// Health check endpoint
app.get("/api/health", async (req, res) => {

    res.status(200).json({
        status: "ok",
        message: "Server is running"
    })

})

// Chat endpoint for AI responses
app.post("/api/chat", async (req, res) => {
    try {
        const { message } = req.body;
        
        if (!message) {
            return res.status(400).json({
                error: "Message is required"
            });
        }

        let response;
        
        // Check if Gemini API key is configured
        if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'your_gemini_api_key_here') {
            try {
                response = await getGeminiResponse(message);
            } catch (error) {
                console.error('Gemini API error, falling back to mock:', error.message);
                response = generateMockResponse(message);
            }
        } else {
            console.log('Gemini API key not configured, using mock responses');
            response = generateMockResponse(message);
        }
        
        res.status(200).json({
            reply: response,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error in chat endpoint:', error);
        res.status(500).json({
            error: "Internal server error"
        });
    }
});

// Gemini AI integration function
async function getGeminiResponse(userMessage) {
    try {
        // Create a context-aware prompt for college helpdesk
        const prompt = `You are a helpful AI assistant for a college helpdesk system. You help students with college-related queries including academics, administrative matters, campus life, and general information.

College Information:
- College Name: ${process.env.COLLEGE_NAME || 'Sharda University'}
- Location: ${process.env.COLLEGE_LOCATION || 'Greater Noida, India'}
- Website: ${process.env.COLLEGE_WEBSITE || 'https://shardauniversity.com'}

Guidelines:
- Be friendly, helpful, and professional
- Provide accurate and useful information
- If you don't know specific details about this college, provide general helpful guidance
- Use emojis where appropriate to make responses engaging
- Keep responses concise but informative
- For urgent matters, always direct students to contact appropriate college offices

Student Question: ${userMessage}

Please provide a helpful response:`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        return text;
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        throw error;
    }
}

// Mock response generator - fallback when Gemini API is not available
function generateMockResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('exam') || lowerMessage.includes('test')) {
        return "📚 Exam dates for the current semester:\n\n• Mid-term exams: March 15-22, 2024\n• Final exams: May 10-20, 2024\n• Supplementary exams: June 5-10, 2024\n\nPlease check your student portal for subject-specific timings and venue details.";
    } else if (lowerMessage.includes('fee') || lowerMessage.includes('payment') || lowerMessage.includes('cost')) {
        return "💰 Current fee structure:\n\n• Tuition Fee: $15,000/semester\n• Hostel Fee: $3,000/semester\n• Mess Fee: $1,200/semester\n• Library Fee: $200/semester\n\nPayment deadline: 15th of each month. Late fees apply after the deadline.";
    } else if (lowerMessage.includes('hostel') || lowerMessage.includes('dorm') || lowerMessage.includes('accommodation')) {
        return "🏠 Hostel Rules & Information:\n\n• Check-in time: 6:00 PM\n• Check-out time: 9:00 AM\n• Visitors allowed until 8:00 PM\n• No outside food in rooms\n• Quiet hours: 10:00 PM - 6:00 AM\n\nFor room allotment issues, contact the Hostel Warden.";
    } else if (lowerMessage.includes('dean') || lowerMessage.includes('faculty') || lowerMessage.includes('professor')) {
        return "👨‍🎓 Current Academic Leadership:\n\n• Dean of Engineering: Dr. Sarah Johnson\n• Dean of Sciences: Dr. Michael Brown\n• Dean of Arts: Dr. Emily Davis\n• Dean of Students: Dr. Robert Wilson\n\nOffice hours: Monday-Friday, 9:00 AM - 5:00 PM";
    } else if (lowerMessage.includes('event') || lowerMessage.includes('festival') || lowerMessage.includes('activity')) {
        return "🎉 Upcoming College Events:\n\n• Tech Fest 2024: April 15-17\n• Annual Sports Meet: March 20-25\n• Cultural Festival: February 28 - March 3\n• Career Fair: April 5-6\n\nRegister through the student portal or contact the Student Activities Office.";
    } else {
        return "Hello! I'm here to help you with college-related queries. You can ask me about:\n\n• Exam schedules and dates\n• Fee structures and payment\n• Hostel rules and facilities\n• Faculty and administration\n• Campus events and activities\n• Academic policies\n\nHow can I assist you today?";
    }
}

// Root endpoint
app.get("/", async (req, res) => {

    res.status(200).json({
        message: "College Helpdesk AI Backend API",
        version: "1.0.0",
        endpoints: {
            health: "/api/health",
            chat: "/api/chat"
        }
    });

})

// Start server
app.listen(port, () => {
    console.log(`🚀 College Helpdesk AI Backend running on http://localhost:${port}`);
})