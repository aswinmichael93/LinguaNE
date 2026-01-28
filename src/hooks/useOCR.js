import { useState } from 'react';
import { extractTextFromImage } from '../services/api/ocrAPI';
import { preprocessImage } from '../services/utils/imageProcessor';

export default function useOCR() {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const [error, setError] = useState(null);

  const processImage = async (file, language) => {
    try {
      setLoading(true);
      setError(null);

      const processedImage = await preprocessImage(file);
      const result = await extractTextFromImage(processedImage, language);

      setText(result.text);
      return result;
    } catch (err) {
      setError('OCR processing failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    processImage,
    text,
    loading,
    error
  };
}
