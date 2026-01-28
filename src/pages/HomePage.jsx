import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/common/Card';

export default function HomePage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const features = [
    {
      title: 'Text Translator',
      description: 'Type and translate text',
      icon: '📄',
      route: '/language-selection/text'
    },
    {
      title: 'Speech Translator',
      description: 'Speak and hear translations',
      icon: '🎤',
      route: '/language-selection/speech'
    },
    {
      title: 'OCR Translator',
      description: 'Scan images and documents',
      icon: '📷',
      route: '/language-selection/ocr'
    },
    {
      title: 'Dictionary',
      description: 'Explore word meanings',
      icon: '📘',
      route: '/dictionary'
    },
    {
      title: 'Feedback Hub',
      description: 'Track your contributions',
      icon: '💬',
      route: '/feedback'
    },
    {
      title: 'Community Impact',
      description: 'See how you help',
      icon: '📊',
      route: '/community-impact'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
          <p className="text-gray-600 mt-1">
            Guest • Making a difference in language preservation
          </p>
        </div>

        {/* Profile Menu */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setOpen(!open)}
            className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl focus:outline-none"
          >
            👤
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border z-50">
              <MenuItem label="Recommended Items" />
              <MenuItem label="My Profile" onClick={() => navigate('/profile')} />
              <MenuItem label="Language Preferences" onClick={() => navigate('/language')} />
              <MenuItem label="My Contributions" onClick={() => navigate('/feedback')} />
              <MenuItem label="Settings" onClick={() => navigate('/settings')} />
              <hr className="my-1" />
              <MenuItem
                label="Logout"
                danger
                onClick={() => {
                  localStorage.clear();
                  navigate('/login');
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white mb-10 shadow">
        <h2 className="text-xl font-semibold mb-1">
          Every word you contribute matters
        </h2>
        <p className="text-sm opacity-90">
          Your feedback helps AI understand tribal languages with cultural context
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((item) => (
          <Card
            key={item.title}
            hover
            onClick={() => navigate(item.route)}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 text-xl">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
            <div className="text-gray-400 text-xl">›</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function MenuItem({ label, onClick, danger }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${danger ? 'text-red-600' : 'text-gray-700'
        }`}
    >
      {label}
    </button>
  );
}
