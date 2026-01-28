import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function FeedbackSuccess() {
  return (
    <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
      <CheckCircle size={20} />
      <span className="text-sm font-medium">
        Feedback submitted successfully. Thank you for contributing.
      </span>
    </div>
  );
}
