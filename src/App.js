import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import SplashPage from './pages/SplashPage';
import LoginPage from './pages/LoginPage';
import AppLanguageSelectionPage from './pages/AppLanguageSelectionPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';


import LanguageSelectionPage from './pages/LanguageSelectionPage';
import TextTranslatorPage from './pages/TextTranslatorPage';
import SpeechTranslatorPage from './pages/SpeechTranslatorPage';
import OCRTranslatorPage from './pages/OCRTranslatorPage';
import DictionaryPage from './pages/DictionaryPage';
import FeedbackHubPage from './pages/FeedbackHubPage';
import CommunityImpactPage from './pages/CommunityImpactPage';

function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Splash screen (blocks everything until done) */}
        {!splashDone && (
          <Route
            path="*"
            element={<SplashPage onComplete={() => setSplashDone(true)} />}
          />
        )}

        {/* Main app routes */}
        {splashDone && (
          <>
            {/* Entry */}
            <Route path="/" element={<Navigate to="/login" replace />} />

            {/* Login */}
            <Route path="/login" element={<LoginPage />} />

            {/* App language selection */}
            <Route path="/language" element={<AppLanguageSelectionPage />} />

            {/* Home */}
            <Route path="/home" element={<HomePage />} />

            {/* Language selection by mode */}
            <Route
              path="/language-selection/text"
              element={<LanguageSelectionPage mode="text" />}
            />
            <Route
              path="/language-selection/speech"
              element={<LanguageSelectionPage mode="speech" />}
            />
            <Route
              path="/language-selection/ocr"
              element={<LanguageSelectionPage mode="ocr" />}
            />

            {/* Translators */}
            <Route path="/translate/text" element={<TextTranslatorPage />} />
            <Route path="/translate/speech" element={<SpeechTranslatorPage />} />
            <Route path="/translate/ocr" element={<OCRTranslatorPage />} />

            {/* Other features */}
            <Route path="/dictionary" element={<DictionaryPage />} />
            <Route path="/feedback" element={<FeedbackHubPage />} />
            <Route path="/community-impact" element={<CommunityImpactPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />


            {/* Fallback */}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </>

        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
