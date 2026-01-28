import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import WaveformAnimation from '../components/translator/WaveformAnimation';
import useSpeechRecognition from '../hooks/useSpeechRecognition';

export default function SpeechTranslatorPage() {
  const navigate = useNavigate();

  const [fromLang, setFromLang] = useState(null);
  const [toLang, setToLang] = useState(null);
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    startRecording,
    stopRecording,
    recording,
    transcript
  } = useSpeechRecognition();

  useEffect(() => {
    const saved = localStorage.getItem('speechTranslationConfig');
    if (!saved) {
      navigate('/home');
      return;
    }
    const { from, to } = JSON.parse(saved);
    setFromLang(from);
    setToLang(to);
  }, [navigate]);

  const handleStop = async () => {
    stopRecording(fromLang.code);

    if (!transcript) return;

    setLoading(true);

    try {
      const res = await fetch('http://localhost:8000/api/translate/text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: transcript,
          source_language: fromLang.code,
          target_language: toLang.code
        })
      });

      const data = await res.json();
      setTranslatedText(data.translation);

      // 🔊 Speak translated text
      speak(data.translation, toLang.code);
    } catch (e) {
      alert('Speech translation failed');
    } finally {
      setLoading(false);
    }
  };

  const speak = (text, langCode) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode === 'hi' ? 'hi-IN' : 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  if (!fromLang || !toLang) return null;

  return (
    <div className="min-h-screen bg-orange-50 px-6 py-6 text-center">
      <button
        onClick={() => navigate('/home')}
        className="text-orange-600 mb-6"
      >
        ← Back to Home
      </button>

      <h1 className="text-2xl font-bold mb-1">
        Speech Translator
      </h1>
      <p className="text-gray-600 mb-6">
        {fromLang.name} → {toLang.name}
      </p>

      <Button
        onClick={() => (recording ? handleStop() : startRecording())}
      >
        {recording ? 'Stop Recording' : 'Start Recording'}
      </Button>

      <WaveformAnimation active={recording} />

      {transcript && (
        <Card className="mt-6 p-4">
          <h3 className="font-semibold mb-2">You said</h3>
          <p>{transcript}</p>
        </Card>
      )}

      {loading && <p className="mt-4">Translating…</p>}

      {translatedText && (
        <Card className="mt-6 p-4">
          <h3 className="font-semibold mb-2">Translation</h3>
          <p>{translatedText}</p>

          <Button
            className="mt-4"
            onClick={() => speak(translatedText, toLang.code)}
          >
            🔊 Play Again
          </Button>
        </Card>
      )}
    </div>
  );
}
