import React, { useEffect, useState } from 'react';
import TribalPattern from '../components/common/TribalPattern';

export default function SplashPage({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return p + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-600 to-red-500 relative overflow-hidden">
      <TribalPattern className="absolute w-96 h-96 text-white opacity-20" />

      <div className="text-center z-10">
        <h1 className="text-5xl font-bold text-white mb-4">LinguaNE</h1>
        <p className="text-white/90 mb-6">
          Preserving tribal languages digitally
        </p>

        <div className="w-64 h-2 bg-white/30 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-white transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
