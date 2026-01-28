import { useState, useRef } from 'react';
import AudioRecorder from '../services/utils/audioRecorder';
import { speechToText } from '../services/api/speechAPI';

export default function useSpeechRecognition() {
  const recorderRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const startRecording = async () => {
    try {
      recorderRef.current = new AudioRecorder();
      await recorderRef.current.start();
      setRecording(true);
    } catch {
      setError('Microphone access denied');
    }
  };

  const stopRecording = async (language) => {
    try {
      setLoading(true);
      const audioBlob = await recorderRef.current.stop();
      const result = await speechToText(audioBlob, language);
      setTranscript(result.text);
      return result;
    } catch {
      setError('Speech recognition failed');
    } finally {
      setRecording(false);
      setLoading(false);
    }
  };

  return {
    startRecording,
    stopRecording,
    recording,
    transcript,
    loading,
    error
  };
}
