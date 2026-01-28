import React from 'react';
import { Globe, User } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Header() {
  const { user, feedbackCount } = useApp();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
            <Globe size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold text-gray-800">LinguaNE</span>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-800">
              {user?.email || 'Guest User'}
            </p>
            <p className="text-xs text-gray-500">
              {feedbackCount} contributions
            </p>
          </div>
          <User size={22} className="text-gray-600" />
        </div>
      </div>
    </header>
  );
}
