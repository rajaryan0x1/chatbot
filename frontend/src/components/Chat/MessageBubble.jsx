const MessageBubble = ({ message, isUser, timestamp }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-slide-up`}>
      <div className={`flex ${isUser ? 'flex-row-reverse' : 'flex-row'} items-end space-x-2 max-w-4xl`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser ? 'bg-primary-500 ml-2' : 'bg-gray-200 mr-2'
        }`}>
          <span className="text-sm font-medium">
            {isUser ? '👤' : '🤖'}
          </span>
        </div>
        
        {/* Message content */}
        <div className="flex flex-col">
          <div className={`chat-bubble ${isUser ? 'chat-bubble-user' : 'chat-bubble-bot'}`}>
            <div className="whitespace-pre-wrap text-sm leading-relaxed">
              {message}
            </div>
          </div>
          {timestamp && (
            <div className={`text-xs text-gray-400 mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
              {timestamp}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;