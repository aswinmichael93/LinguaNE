import React from 'react';

export default function WaveformAnimation({ active = false }) {
  if (!active) return null;

  return (
    <div className="flex justify-center gap-1 h-16 items-end">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="w-1 rounded-full bg-purple-500 animate-pulse"
          style={{
            height: `${Math.random() * 40 + 20}px`,
            animationDelay: `${i * 0.05}s`
          }}
        />
      ))}
    </div>
  );
}
