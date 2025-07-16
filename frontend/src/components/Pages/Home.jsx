import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: '🎓',
      title: 'Academic Support',
      description: 'Get instant answers about exam schedules, course information, and academic policies.'
    },
    {
      icon: '💰',
      title: 'Fee Information',
      description: 'Quick access to fee structures, payment deadlines, and financial aid information.'
    },
    {
      icon: '🏠',
      title: 'Hostel Services',
      description: 'Find out about hostel rules, room allocation, and accommodation services.'
    },
    {
      icon: '🎉',
      title: 'Campus Events',
      description: 'Stay updated with upcoming events, festivals, and campus activities.'
    },
    {
      icon: '👥',
      title: 'Faculty Directory',
      description: 'Connect with faculty members and administrative staff quickly.'
    },
    {
      icon: '⚡',
      title: 'Instant Responses',
      description: 'Get immediate help 24/7 with our AI-powered assistance.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-3xl">🤖</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Smart
              <span className="text-primary-500 block">College Assistant</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get instant answers to all your college-related questions. From exam schedules to hostel rules, 
              our AI-powered chatbot is here to help you navigate college life effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/chat" className="btn-primary text-lg px-8 py-4 rounded-xl">
                Start Chatting Now
              </Link>
              <Link to="/about" className="btn-secondary text-lg px-8 py-4 rounded-xl">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How Can I Help You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-primary-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who are already using our AI assistant to simplify their college experience.
          </p>
          <Link to="/chat" className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-xl transition-colors duration-200">
            Try It Now - It's Free!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;