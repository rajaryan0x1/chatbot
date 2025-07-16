import cityImage from "./illustration-anime-city.jpg";

const About = () => {
  const stats = [
    { number: "10,000+", label: "Students Helped" },
    { number: "24/7", label: "Availability" },
    { number: "500+", label: "Topics Covered" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  const team = [
    {
      name: "Raj Aryan",
      role: "Project Lead",
      department: "Computer Science",
      image: <img src={cityImage} alt="Raj Aryan" className="mx-auto rounded-full w-24 h-24 object-cover mb-4" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About College Help AI</h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            Revolutionizing student support through artificial intelligence and making college life easier for everyone.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              College Help AI was created to bridge the gap between students and the information they need. 
              We understand that navigating college life can be overwhelming, with countless questions about 
              academics, campus services, fees, and policies.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our AI-powered chatbot provides instant, accurate answers 24/7, ensuring that students never 
              have to wait for the help they need. Whether it's 2 AM and you need exam dates, or you're 
              confused about fee payment deadlines, we're here to help.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Impact by Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">What Makes Us Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Powered by Google Gemini</h3>
              <p className="text-gray-600">
                Our chatbot uses Google's advanced Gemini AI model to understand context and provide 
                accurate, helpful responses to your questions.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Responses</h3>
              <p className="text-gray-600">
                Get immediate answers to your questions without waiting in long queues or office hours. 
                Available 24/7 for your convenience.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">College-Specific Knowledge</h3>
              <p className="text-gray-600">
                Trained specifically on college policies, procedures, and common student questions 
                to provide the most relevant information.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy & Security</h3>
              <p className="text-gray-600">
                Your conversations are secure and private. We don't store personal information 
                or share your questions with third parties.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-500 font-medium mb-1">{member.role}</p>
                <p className="text-gray-600">{member.department}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future of Student Support?</h2>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of students who are already benefiting from our AI-powered assistance.
          </p>
          <a href="/chat" className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Start Chatting Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;