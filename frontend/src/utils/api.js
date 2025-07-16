// Mock API service for Gemini integration
export const chatAPI = {
  // Mock responses for different types of questions
  mockResponses: {
    exam: "📚 Exam dates for the current semester:\n\n• Mid-term exams: March 15-22, 2024\n• Final exams: May 10-20, 2024\n• Supplementary exams: June 5-10, 2024\n\nPlease check your student portal for subject-specific timings and venue details.",
    
    fees: "💰 Current fee structure:\n\n• Tuition Fee: $15,000/semester\n• Hostel Fee: $3,000/semester\n• Mess Fee: $1,200/semester\n• Library Fee: $200/semester\n\nPayment deadline: 15th of each month. Late fees apply after the deadline.",
    
    hostel: "🏠 Hostel Rules & Information:\n\n• Check-in time: 6:00 PM\n• Check-out time: 9:00 AM\n• Visitors allowed until 8:00 PM\n• No outside food in rooms\n• Quiet hours: 10:00 PM - 6:00 AM\n\nFor room allotment issues, contact the Hostel Warden.",
    
    dean: "👨‍🎓 Current Academic Leadership:\n\n• Dean of Engineering: Dr. Sarah Johnson\n• Dean of Sciences: Dr. Michael Brown\n• Dean of Arts: Dr. Emily Davis\n• Dean of Students: Dr. Robert Wilson\n\nOffice hours: Monday-Friday, 9:00 AM - 5:00 PM",
    
    events: "🎉 Upcoming College Events:\n\n• Tech Fest 2024: April 15-17\n• Annual Sports Meet: March 20-25\n• Cultural Festival: February 28 - March 3\n• Career Fair: April 5-6\n\nRegister through the student portal or contact the Student Activities Office.",
    
    default: "Hello! I'm here to help you with college-related queries. You can ask me about:\n\n• Exam schedules and dates\n• Fee structures and payment\n• Hostel rules and facilities\n• Faculty and administration\n• Campus events and activities\n• Academic policies\n\nHow can I assist you today?"
  },

  // Simulate API call with delay
  async sendMessage(message) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const lowerMessage = message.toLowerCase();
    
    // Simple keyword matching for mock responses
    if (lowerMessage.includes('exam') || lowerMessage.includes('test')) {
      return this.mockResponses.exam;
    } else if (lowerMessage.includes('fee') || lowerMessage.includes('payment') || lowerMessage.includes('cost')) {
      return this.mockResponses.fees;
    } else if (lowerMessage.includes('hostel') || lowerMessage.includes('dorm') || lowerMessage.includes('accommodation')) {
      return this.mockResponses.hostel;
    } else if (lowerMessage.includes('dean') || lowerMessage.includes('faculty') || lowerMessage.includes('professor')) {
      return this.mockResponses.dean;
    } else if (lowerMessage.includes('event') || lowerMessage.includes('festival') || lowerMessage.includes('activity')) {
      return this.mockResponses.events;
    } else {
      return this.mockResponses.default;
    }
  },

  // Real Gemini API integration (when backend is ready)
  async sendToGemini(message) {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response from server');
      }
      
      const data = await response.json();
      return data.reply;
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      // Fallback to mock response
      return this.sendMessage(message);
    }
  }
};