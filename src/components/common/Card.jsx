import React from 'react';

export default function Card({
  children,
  className = '',
  hover = false,
  onClick
}) {
  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={`
        bg-white rounded-xl p-6 shadow
        ${hover ? 'hover:shadow-lg transition cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
