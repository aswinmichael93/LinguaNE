import { useState } from 'react';
import { submitFeedback } from '../services/api/feedbackAPI';
import { useApp } from '../context/AppContext';

export default function useFeedback() {
  const { setFeedbackCount } = useApp();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const sendFeedback = async (data) => {
    try {
      setLoading(true);
      setError(null);

      await submitFeedback(data);
      setFeedbackCount(prev => prev + 1);
      setSuccess(true);

      setTimeout(() => setSuccess(false), 3000);
    } catch {
      setError('Failed to submit feedback');
    } finally {
      setLoading(false);
    }
  };

  return {
    sendFeedback,
    loading,
    success,
    error
  };
}
