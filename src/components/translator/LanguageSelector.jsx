import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function LanguageSelector({
  label,
  selected,
  options = [],
  onSelect
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <div className="relative">
        <select
          value={selected || ''}
          onChange={(e) => onSelect(e.target.value)}
          className="w-full appearance-none p-3 pr-10 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        >
          <option value="" disabled>
            Select language
          </option>

          {options.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.nativeName || lang.name}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
      </div>
    </div>
  );
}
