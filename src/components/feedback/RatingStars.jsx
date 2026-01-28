import React from 'react';
import { Star } from 'lucide-react';

export default function RatingStars({ value = 0, onChange }) {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map(star => (
        <Star
          key={star}
          size={28}
          onClick={() => onChange(star)}
          className={`cursor-pointer transition-colors ${
            star <= value
              ? 'fill-orange-500 text-orange-500'
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}
