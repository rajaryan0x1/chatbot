# 🔑 Gemini API Integration Setup Guide

## Getting Your Gemini API Key

1. **Visit Google AI Studio:**
   - Go to [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
   - Sign in with your Google account

2. **Create API Key:**
   - Click "Create API Key"
   - Choose "Create API key in new project" or select existing project
   - Copy the generated API key

3. **Configure Your Backend:**
   - Open `/backend/.env` file
   - Replace `your_gemini_api_key_here` with your actual API key:
   ```
   GEMINI_API_KEY=AIza...your_actual_key_here
   ```

4. **Customize College Information (Optional):**
   ```
   COLLEGE_NAME=Your College Name
   COLLEGE_LOCATION=Your City, State
   COLLEGE_WEBSITE=https://yourcollege.edu
   ```

## Features

### ✅ Smart Fallback System
- If API key is not configured → Uses mock responses
- If API key is invalid/expired → Falls back to mock responses
- If API call fails → Falls back to mock responses

### ✅ Context-Aware Responses
- Gemini knows it's a college helpdesk system
- Provides college-specific guidance
- Uses your college information when configured

### ✅ Professional & Helpful
- Friendly and professional tone
- Uses emojis for engagement
- Concise but informative responses
- Directs students to appropriate offices when needed

## Testing

1. **Without API Key (Mock Mode):**
   ```bash
   cd backend
   npm start
   ```
   → Will use mock responses

2. **With API Key (AI Mode):**
   - Add your API key to `.env`
   - Restart server
   - Chat responses will be powered by Gemini AI

## Example Conversations

**Student:** "When are the final exams?"
**AI Response:** "📚 I'd be happy to help you with exam information! For the most accurate and up-to-date final exam schedule, I recommend:

✅ Checking your student portal
✅ Contacting the Registrar's Office
✅ Asking your professors directly

Generally, final exams are typically scheduled during the last week of the semester. Make sure to verify the specific dates and times for each of your courses! 📅"

**Student:** "How do I apply for hostel accommodation?"
**AI Response:** "🏠 Here's how you can apply for hostel accommodation:

1️⃣ **Application Process:**
   - Visit the Student Housing Office
   - Fill out the accommodation application form
   - Submit required documents (ID, medical certificate, etc.)

2️⃣ **Important Steps:**
   - Apply early as rooms fill up quickly
   - Pay the required deposit
   - Choose your preferred hostel type

3️⃣ **Contact Information:**
   - Student Housing Office: [office hours]
   - Email: housing@college.edu
   - Phone: [contact number]

Need help with anything specific about the application process? 🎓"

## Error Handling

The system gracefully handles:
- Missing API key
- Invalid API key
- Network issues
- API rate limits
- Malformed responses

## Security Notes

- ⚠️ Never commit your `.env` file to version control
- 🔒 Keep your API key secure and private
- 🔄 Regenerate keys if compromised
- 📊 Monitor API usage in Google Cloud Console

## Cost Considerations

- Gemini API has generous free tier
- Monitor usage in Google Cloud Console
- Consider implementing rate limiting for production
- Mock responses are free and always available as fallback
