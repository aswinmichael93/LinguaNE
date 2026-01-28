import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

export default function ScannerPage() {
  const navigate = useNavigate();

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const [cameraOn, setCameraOn] = useState(false);
  const [image, setImage] = useState(null);

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  // -----------------------------
  // Camera logic
  // -----------------------------
  const startCamera = async () => {
    if (!isMobile) {
      alert('Camera scanning works best on mobile devices. Please upload a document.');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });

      videoRef.current.srcObject = stream;
      setCameraOn(true);
    } catch (err) {
      alert('Unable to access camera');
    }
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);

    setImage(canvas.toDataURL('image/png'));

    // stop camera
    video.srcObject.getTracks().forEach(track => track.stop());
    setCameraOn(false);
  };

  // -----------------------------
  // Upload logic
  // -----------------------------
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-orange-50 px-6 py-6">
      {/* Back */}
      <button
        onClick={() => navigate('/home')}
        className="text-orange-600 mb-4"
      >
        ← Back to Home
      </button>

      <h1 className="text-2xl font-bold mb-2">Scanner</h1>
      <p className="text-gray-600 mb-6">
        Scan documents using your camera or upload a file
      </p>

      {/* Action buttons */}
      {!cameraOn && !image && (
        <Card className="p-6 flex flex-col md:flex-row gap-4">
          <Button className="w-full" onClick={startCamera}>
            📷 Scan using Camera
          </Button>

          <Button
            className="w-full"
            variant="outline"
            onClick={() => fileInputRef.current.click()}
          >
            📄 Upload Document
          </Button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,.pdf"
            onChange={handleUpload}
            hidden
          />
        </Card>
      )}

      {/* Camera preview */}
      {cameraOn && (
        <Card className="p-4 text-center">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="rounded-lg w-full"
          />
          <Button className="w-full mt-4" onClick={captureImage}>
            Capture
          </Button>
        </Card>
      )}

      {/* Preview */}
      {image && (
        <Card className="mt-6 p-4">
          <h3 className="font-semibold mb-2">Preview</h3>
          <img src={image} alt="Scanned" className="rounded-lg w-full" />

          <Button className="w-full mt-4">
            Extract Text
          </Button>
        </Card>
      )}

      <canvas ref={canvasRef} hidden />
    </div>
  );
}
