import React, { useState } from 'react';
import './scannedFaceFullScreen.css';

export default function ScannedFaceFullScreen() {
  const [imageSrc, setImageSrc] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Handle the file upload or scanned image input
  const handleImageCapture = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      // Create a temporary local URL for the file object
      const objectUrl = URL.createObjectURL(file);
      setImageSrc(objectUrl);
      setIsFullscreen(true); // Automatically open full screen once captured
    }
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <div className="container">
      {/* File input. Use accept="image/*" and capture="environment" to trigger the device camera */}
      <label className="upload-btn">
        Scan / Upload Image
        <input 
          type="file" 
          accept="image/*" 
          capture="environment" 
          onChange={handleImageCapture} 
          style={{ display: 'none' }}
        />
      </label>

      {/* Standard Preview Area */}
      {imageSrc && !isFullscreen && (
        <div className="preview-box">
          <img src={imageSrc} alt="Scanned preview" onClick={() => setIsFullscreen(true)} />
          <p>Click image to view full screen</p>
        </div>
      )}

       {/* Full Screen Modal Overlay */}
      {isFullscreen && imageSrc && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <button className="close-btn" onClick={closeFullscreen}>&times;</button>
          <img 
            src={imageSrc} 
            alt="Scanned Full Screen" 
            className="fullscreen-image"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image itself
          />
        </div>
      )}
    </div>
  );
}

