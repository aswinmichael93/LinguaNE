import React, { useState } from 'react';
import { Sparkles, AlertCircle } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';
import RatingStars from './RatingStars';
import CorrectionInput from './CorrectionInput';
import FeedbackSuccess from './FeedbackSuccess';

export default function FeedbackPanel({ onSubmit, translationType = 'text' }) {
  const [rating, setRating] = useState(0);
  const [correction, setCorrection] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    onSubmit({
      rating,
      correction,
      translationType
    });
    setSubmitted(true);
    setRating(0);
    setCorrection('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Card className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles size={18} className="text-orange-500" />
        <h3 className="font-semibold text-gray-800">
          Help improve this language
        </h3>
      </div>

      {submitted ? (
        <FeedbackSuccess />
      ) : (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rate translation quality
            </label>
            <RatingStars value={rating} onChange={setRating} />
          </div>

          <CorrectionInput
            value={correction}
            onChange={setCorrection}
          />

          <div className="flex items-start gap-2 text-xs text-gray-600 bg-white p-3 rounded-lg">
            <AlertCircle size={14} className="text-orange-500 mt-0.5" />
            <p>
              Your feedback is reviewed by native speakers and used only to
              improve language quality.
            </p>
          </div>

          <Button onClick={handleSubmit} disabled={rating === 0}>
            Submit Feedback
          </Button>
        </div>
      )}
    </Card>
  );
}
