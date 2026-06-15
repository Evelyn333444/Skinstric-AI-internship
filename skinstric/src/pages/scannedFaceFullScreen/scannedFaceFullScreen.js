import React from 'react';
import BackButton from 'assets/backbutton.svg';
import './scannedFaceFullScreen.css';

function ScannedFaceFullScreen({ scannedPhoto, onBackClick }) {
  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
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
      <footer className="scanned-face-footer">
        <button type="button" className="back-button" onClick={handleBackClick}>
          <img src={BackButton} alt="Back" />
        </button>
      </footer>
    </div>
  );
}

export default ScannedFaceFullScreen;
