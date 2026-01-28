import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

export default function TextTranslatorPage() {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [fromLang, setFromLang] = useState(null);
  const [toLang, setToLang] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('textTranslationConfig');
    if (!saved) {
      navigate('/home');
      return;
    }
    const { from, to } = JSON.parse(saved);
    setFromLang(from);
    setToLang(to);
  }, [navigate]);

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setOutputText('');

    try {
      const response = await fetch(
        'http://localhost:8000/api/translate/text',

        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            text: inputText,
            source_language: fromLang.nllbCode,
            target_language: toLang.nllbCode,

            user_consent: true
          })
        }
      );

      if (!response.ok) {
        throw new Error('Translation failed');
      }

      const data = await response.json();
      setOutputText(data.translation);
    } catch (error) {
      alert('Failed to translate text. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!fromLang || !toLang) return null;

  return (
    <div className="min-h-screen bg-orange-50 px-6 py-6">
      {/* Back */}
      <button
        onClick={() => navigate('/home')}
        className="text-orange-600 mb-4"
      >
        ← Back to Home
      </button>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-1">Text Translator</h1>
      <p className="text-gray-600 mb-6">
        {fromLang.name} → {toLang.name}
      </p>

      {/* Input */}
      <Card className="mb-6 p-4">
        <label className="block font-medium mb-2">
          Enter text in {fromLang.name}
        </label>

        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={`Type in ${fromLang.name}...`}
          rows={6}
          className="w-full border rounded-lg p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <Button
          className="w-full"
          disabled={!inputText.trim() || loading}
          onClick={handleTranslate}
        >
          {loading ? 'Translating...' : 'Translate'}
        </Button>
      </Card>

      {/* Output */}
      {outputText && (
        <Card className="mb-6 p-4 animate-fade-in">
          <h3 className="font-semibold mb-2">
            Translation ({toLang.name})
          </h3>
          <p className="text-gray-800 whitespace-pre-wrap">
            {outputText}
          </p>
        </Card>
      )}

      {/* Info */}
      <div className="border border-blue-300 bg-blue-50 text-blue-700 rounded-lg p-4 text-sm">
        💡 <strong>Your feedback improves this language:</strong>{' '}
        Native speakers validate translations to ensure cultural accuracy and
        improve the AI model for everyone.
      </div>
    </div>
  );
}
