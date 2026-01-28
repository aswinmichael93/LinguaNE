import React from 'react';

export default function CorrectionInput({ value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Suggest a correction (optional)
      </label>
      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        rows="3"
        placeholder="If the translation is inaccurate, write the correct version here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
