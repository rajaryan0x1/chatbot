import ChatInterface from '../Chat/ChatInterface';

const ChatPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">College Help Chatbot</h1>
          <p className="text-gray-600">Ask me anything about college life, academics, or campus services</p>
        </div>
        <div className="h-[700px]">
          <ChatInterface />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;