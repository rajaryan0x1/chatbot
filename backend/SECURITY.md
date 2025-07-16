# Security Guidelines

## Environment Variables

### Setup
1. Copy `.env.example` to `.env`
2. Fill in your actual values
3. Never commit `.env` to version control

### Required Variables
- `GEMINI_API_KEY`: Your Google Gemini API key
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment (development/production)

### Security Notes
- Keep your API keys secret
- Use different keys for development and production
- Rotate API keys regularly
- Monitor API usage for unusual activity

## Production Deployment
- Use your hosting platform's environment variable system
- Never hardcode secrets in your code
- Use proper secret management services for production