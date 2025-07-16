const QuickPrompts = ({ onPromptClick }) => {
  const prompts = [
    { text: "When are the exams?", icon: "📚" },
    { text: "What's the hostel fee?", icon: "💰" },
    { text: "Who is the Dean?", icon: "👨‍🎓" },
    { text: "Tell me about upcoming events", icon: "🎉" },
    { text: "Hostel rules and timings", icon: "🏠" },
    { text: "How to pay fees?", icon: "💳" },
  ];

  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Quick questions:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {prompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => onPromptClick(prompt.text)}
            className="btn-secondary text-left p-3 text-sm hover:shadow-md transition-shadow duration-200"
          >
            <span className="mr-2">{prompt.icon}</span>
            {prompt.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickPrompts;