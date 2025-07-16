const FAQ = () => {
  const faqs = [
    {
      category: "Academic",
      questions: [
        {
          q: "When are the final exams?",
          a: "Final exams are typically scheduled from May 10-20 each semester. Specific dates and times are available on the student portal."
        },
        {
          q: "How do I check my grades?",
          a: "You can access your grades through the student portal using your login credentials. Grades are usually posted within 2 weeks after exams."
        },
        {
          q: "What's the attendance requirement?",
          a: "Students must maintain at least 75% attendance in each course to be eligible for final examinations."
        }
      ]
    },
    {
      category: "Fees & Payments",
      questions: [
        {
          q: "When is the fee payment deadline?",
          a: "Fees must be paid by the 15th of each month. Late fees apply after this date."
        },
        {
          q: "What payment methods are accepted?",
          a: "We accept online payments, bank transfers, demand drafts, and cash payments at the accounts office."
        },
        {
          q: "Is there a fee concession for merit students?",
          a: "Yes, merit scholarships are available. Contact the scholarship office for eligibility criteria and application process."
        }
      ]
    },
    {
      category: "Hostel",
      questions: [
        {
          q: "What are the hostel timings?",
          a: "Hostel gates close at 9:00 PM on weekdays and 10:00 PM on weekends. Late entry requires special permission."
        },
        {
          q: "Can parents visit the hostel?",
          a: "Yes, parents can visit during designated visiting hours (2:00 PM - 6:00 PM) after registering at the security office."
        },
        {
          q: "What facilities are available in the hostel?",
          a: "Hostels include Wi-Fi, laundry services, recreation rooms, study halls, and 24/7 security."
        }
      ]
    },
    {
      category: "Campus Life",
      questions: [
        {
          q: "How do I join clubs and societies?",
          a: "Club registrations are open at the beginning of each semester. Visit the student activities office for more information."
        },
        {
          q: "Where can I find information about events?",
          a: "Campus events are posted on the college website, notice boards, and announced through the student portal."
        },
        {
          q: "Is there a medical center on campus?",
          a: "Yes, the campus health center is open Monday-Friday, 9:00 AM - 5:00 PM, with a qualified nurse and visiting doctor."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find quick answers to common questions or chat with our AI assistant for personalized help.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-primary-500 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-3">
                  {category.category.charAt(0)}
                </span>
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <details key={faqIndex} className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <span className="font-medium text-gray-900">{faq.q}</span>
                      <svg className="w-5 h-5 text-gray-500 transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-3 p-4 text-gray-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary-500 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg mb-6 opacity-90">
            Our AI chatbot can provide personalized answers to your specific questions.
          </p>
          <a href="/chat" className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
            Chat with AI Assistant
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;