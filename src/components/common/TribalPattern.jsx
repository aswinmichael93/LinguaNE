import React from 'react';

export default function TribalPattern({ className = '' }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Star pattern */}
      <path
        d="M100 20 L120 60 L160 60 L130 90 L140 130 L100 110 L60 130 L70 90 L40 60 L80 60 Z"
        fill="currentColor"
        opacity="0.08"
      />

      {/* Circular motif */}
      <circle
        cx="100"
        cy="100"
        r="70"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.12"
      />

      {/* Dots */}
      <circle cx="100" cy="30" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="170" cy="100" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="100" cy="170" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="30" cy="100" r="3" fill="currentColor" opacity="0.3" />
    </svg>
  );
}
