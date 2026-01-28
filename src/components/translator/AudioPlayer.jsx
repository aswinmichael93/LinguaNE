import React, { useEffect, useRef } from 'react';
import { Volume2 } from 'lucide-react';

export default function AudioPlayer({ audioUrl }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioUrl && audioRef.current) {
      audioRef.current.load();
    }
  }, [audioUrl]);

  if (!audioUrl) return null;

  return (
    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border">
      <Volume2 className="text-orange-500" />
      <audio ref={audioRef} controls className="w-full">
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support audio playback.
      </audio>
    </div>
  );
}
