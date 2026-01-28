import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function LoginPage() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('');
  const [consent, setConsent] = useState(false);

  const canProceed = identifier.trim() !== '' && consent;

  const handleSignIn = () => {
    if (!canProceed) return;

    localStorage.setItem('userConsent', 'true');
    localStorage.setItem('userIdentifier', identifier);

    navigate('/language');
  };

  const handleGuest = () => {
    localStorage.setItem('userConsent', 'true');
    navigate('/language');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md p-8">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white">
            📘
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-1">
          Welcome to LinguaNE
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Join the language revolution
        </p>

        {/* Input */}
        <label className="block text-sm font-medium mb-1">
          Email or Phone
        </label>
        <input
          type="text"
          placeholder="Enter your email or phone"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Consent */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
          <label className="flex gap-3 text-sm text-orange-800">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1"
            />
            <span>
              <strong>Data Usage Consent (Required)</strong>
              <br />
              I consent to share my voice and text inputs to help improve
              tribal language AI models. Your contributions are validated by
              native speakers and preserve cultural accuracy.
            </span>
          </label>
        </div>

        {/* Sign In */}
        <Button
          className="w-full mb-3"
          disabled={!canProceed}
          onClick={handleSignIn}
        >
          Sign In
        </Button>

        {/* Guest */}
        <button
          onClick={handleGuest}
          className="w-full border border-orange-400 text-orange-500 rounded-lg py-3 font-medium hover:bg-orange-50 transition"
        >
          Continue as Guest
        </button>

        {/* Footer */}
        <p className="text-xs text-center text-gray-500 mt-6">
          Your voice helps improve the language. Native speakers are
          co-creators, not data sources.
        </p>
      </Card>
    </div>
  );
}
