import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Home from './components/Pages/Home';
import ChatPage from './components/Pages/ChatPage';
import FAQ from './components/Pages/FAQ';
import About from './components/Pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">🤖</span>
                  </div>
                  <span className="text-lg font-bold">College Help AI</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Making college life easier with AI-powered assistance.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/chat" className="hover:text-white">Chatbot</a></li>
                  <li><a href="/faq" className="hover:text-white">FAQ</a></li>
                  <li><a href="/about" className="hover:text-white">About</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Support</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white">Help Center</a></li>
                  <li><a href="#" className="hover:text-white">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Connect</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white">Student Portal</a></li>
                  <li><a href="#" className="hover:text-white">College Website</a></li>
                  <li><a href="#" className="hover:text-white">Feedback</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2024 College Help AI. All rights reserved. Powered by Google Gemini.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;