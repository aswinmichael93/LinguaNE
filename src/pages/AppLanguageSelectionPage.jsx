import React from 'react';
import Card from '../components/common/Card';
import { INTERFACE_LANGUAGES } from '../constants/languages';
import { useNavigate } from 'react-router-dom';

export default function AppLanguageSelectionPage() {
  const navigate = useNavigate();

  const handleSelect = (langCode) => {
    // save selected app language (later you can move this to context)
    localStorage.setItem('appLanguage', langCode);

    // move to home page
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-10">
        Choose App Language
      </h1>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
        {INTERFACE_LANGUAGES.map((lang) => (
          <Card
            key={lang.code}
            hover
            className="cursor-pointer"
            onClick={() => handleSelect(lang.code)}
          >
            <h3 className="text-xl font-semibold">{lang.nativeName}</h3>
            <p className="text-gray-600">{lang.name}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
