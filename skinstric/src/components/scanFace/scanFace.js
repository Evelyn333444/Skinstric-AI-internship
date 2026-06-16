import React, { useEffect, useRef, useState } from 'react';
import BackButton from 'assets/backbutton.svg';
import './scanFace.css';

function ScanFace({ onBackClick, onPhotoCaptured }) {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [error, setError] = useState('');
  const [isCameraReady, setIsCameraReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user' },
        });

        if (!isMounted) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }

        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            setIsCameraReady(true);
          };
        }
      } catch (err) {
        console.error('Camera access denied or not supported', err);
        setError('Please allow camera access to scan your face.');
      }
    };

    startCamera();

    return () => {
      isMounted = false;
      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    };
  }, []);

  const handleBackClick = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    if (onBackClick) {
      onBackClick();
    }
  };

  const handleCapture = () => {
    const video = videoRef.current;
    if (!video || !isCameraReady) {
      return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');
    context.translate(canvas.width, 0);
    context.scale(-1, 1);
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const photo = canvas.toDataURL('image/jpeg');

    streamRef.current?.getTracks().forEach((track) => track.stop());

    if (onPhotoCaptured) {
      onPhotoCaptured(photo);
    }
  };

  return (
    <div className="scan-face-page">
      <header>
        <div className="header-left-intro">
          <span className="header-title">SKINSTRIC</span>
          <span className="header-intro">[INTRO]</span>
        </div>
      </header>
      <main className="scan-face-main">
        <div className="body-left-intro">
          <span className="intro-text">TO START ANALYSIS</span>
        </div>
        <div className="scanner-container">
          {error ? (
            <p className="scan-face-error">{error}</p>
          ) : (
            <div className="camera-box active">
              <video ref={videoRef} autoPlay playsInline muted className="video-feed" />
              <div className="scan-overlay" />
            </div>
          )}
          {!error && (
            <button
              type="button"
              className="capture-btn"
              onClick={handleCapture}
              disabled={!isCameraReady}
            >
              Take Photo
            </button>
          )}
        </div>
      </main>
      <footer className="page-footer">
        <div className="footer-left">
         <button className="back-button" onClick={handleBackClick}>
          <img src={BackButton} alt="" />
        </button>
        <span className="back-button-text">Back</span>
        </div>
      </footer>
    </div>
  );
}

export default ScanFace;
