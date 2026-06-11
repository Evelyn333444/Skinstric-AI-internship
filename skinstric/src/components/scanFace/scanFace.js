import React, { useRef, useState } from 'react';
import './scanFace.css'; // Import the CSS file
import ScanFace from './scan-face-icon.png'; // Replace with your icon path

const scanFace = () => {
  const videoRef = useRef(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleScanTheFace = async () => {
    if (isScanning) {
      // Turn off the camera
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsScanning(false);
    } else {
      // Turn on the camera
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user' } // Prefers the front-facing camera
        });
        videoRef.current.srcObject = stream;
        setIsScanning(true);
      } catch (err) {
        console.error("Camera access denied or not supported", err);
        alert("Please allow camera access to scan your face.");
      }
    }
  };

  return (
    <div className="scanner-container">
      {/* Conditionally render the camera feed */}
      <div className={`camera-box ${isScanning ? 'active' : ''}`}>
        <video ref={videoRef} autoPlay playsInline className="video-feed" />
        {isScanning && <div className="scan-overlay"></div>}
      </div>

      {/* Your original button */}
      <button className="scan-the-face" onClick={handleScanTheFace}>
        <img src={ScanFace} alt="Scan Your Face" className="gallery-image" />
      </button>
    </div>
  );
};

export default scanFace;