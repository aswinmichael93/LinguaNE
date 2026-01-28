import React from 'react';
import { Copy, Volume2 } from 'lucide-react';

export default function TranslationOutput({
  text,
  language,
  onCopy,
  onSpeak
}) {
  if (!text) return null;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-gray-700">
          Translation {language ? `(${language})` : ''}
        </span>

        <div className="flex gap-2">
          <button
            onClick={onCopy}
            className="p-2 rounded-lg hover:bg-white transition-colors"
            title="Copy"
          >
            <Copy size={18} className="text-gray-600" />
          </button>

          <button
            onClick={onSpeak}
            className="p-2 rounded-lg hover:bg-white transition-colors"
            title="Listen"
          >
            <Volume2 size={18} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg text-gray-800 leading-relaxed">
        {text}
      </div>
    </div>
  );
}
