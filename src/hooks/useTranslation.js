import { useState } from 'react';
import { translateText } from '../services/api/translationAPI';

export default function useTranslation() {
  const [loading, setLoading] = useState(false);
  const [translation, setTranslation] = useState(null);
  const [error, setError] = useState(null);

  const translate = async ({
    text,
    sourceLanguage,
    targetLanguage,
    userConsent = true
  }) => {
    try {
      setLoading(true);
      setError(null);

      const result = await translateText({
        text,
        sourceLanguage,
        targetLanguage,
        userConsent
      });

      setTranslation(result);
      return result;
    } catch (err) {
      setError('Translation failed. Please try again.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    translate,
    translation,
    loading,
    error
  };
}
