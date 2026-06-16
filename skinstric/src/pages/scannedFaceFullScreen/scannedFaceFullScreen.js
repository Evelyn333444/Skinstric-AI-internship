import React from 'react';
import './scannedFaceFullScreen.css';

function ScannedFaceFullScreen({ scannedPhoto, onKeepPhotoClick, onTryAgainClick }) {
  const handleKeepPhoto = () => {
    if (scannedPhoto && onKeepPhotoClick) {
      onKeepPhotoClick(scannedPhoto);
    }
  };

  const handleTryAgain = () => {
    if (onTryAgainClick) {
      onTryAgainClick();
    }
  };

  return (
    <div className="scanned-face-page">
      {scannedPhoto ? (
        <img
          src={scannedPhoto}
          alt="Scanned face"
          className="scanned-face-image"
        />
      ) : (
        <div className="scanned-face-empty">
          <p>No scanned photo</p>
        </div>
      )}
      <div className="scanned-face-prompt">
        <p className="scanned-face-question">Keep this photo?</p>
        <div className="scanned-face-actions">
          <button type="button" className="scanned-face-btn keep-photo-btn" onClick={handleKeepPhoto}>
            Keep Photo
          </button>
          <button type="button" className="scanned-face-btn try-again-btn" onClick={handleTryAgain}>
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScannedFaceFullScreen;
