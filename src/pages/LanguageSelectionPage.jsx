import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import {
  TRIBAL_LANGUAGES,
  COMMON_LANGUAGES
} from '../constants/languages';

export default function LanguageSelectionPage({ mode }) {
  const navigate = useNavigate();

  const [sourceLang, setSourceLang] = useState(null);
  const [targetLang, setTargetLang] = useState(null);

  const languages = [...TRIBAL_LANGUAGES, ...COMMON_LANGUAGES];
  const canContinue = sourceLang && targetLang;

  const handleContinue = () => {
    if (!canContinue) return;

    const storageKeyMap = {
      text: 'textTranslationConfig',
      speech: 'speechTranslationConfig',
      ocr: 'ocrTranslationConfig'
    };

    const storageKey = storageKeyMap[mode];

    if (!storageKey) {
      console.error('Invalid mode:', mode);
      return;
    }

    localStorage.setItem(
      storageKey,
      JSON.stringify({
        from: sourceLang,
        to: targetLang
      })
    );

    navigate(`/translate/${mode}`);
  };

  const renderCard = (lang, selected, onSelect) => (
    <Card
      key={lang.code}
      hover
      onClick={() => onSelect(lang)}
      className={`relative ${selected ? 'ring-2 ring-orange-500' : ''}`}
    >
      {lang.pilot && (
        <span className="absolute top-3 right-3 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
          PILOT
        </span>
      )}

      <h3 className="text-xl font-semibold mb-1">
        {lang.nativeName}
      </h3>
      <p className="text-gray-600">{lang.name}</p>
    </Card>
  );

  return (
    <div className="min-h-screen bg-orange-50 px-6 py-6">
      {/* Back */}
      <button
        onClick={() => navigate('/home')}
        className="text-orange-600 mb-4"
      >
        ← Back to Home
      </button>

      <h1 className="text-2xl font-bold mb-6">
        Select Languages
      </h1>

      {/* Source */}
      <h2 className="font-semibold mb-3">
        Source Language (From)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {languages.map((lang) =>
          renderCard(
            lang,
            sourceLang?.code === lang.code,
            setSourceLang
          )
        )}
      </div>

      {/* Target */}
      <h2 className="font-semibold mb-3">
        Target Language (To)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {languages.map((lang) =>
          renderCard(
            lang,
            targetLang?.code === lang.code,
            setTargetLang
          )
        )}
      </div>

      <Button
        className="w-full"
        disabled={!canContinue}
        onClick={handleContinue}
      >
        Continue
      </Button>
    </div>
  );
}
