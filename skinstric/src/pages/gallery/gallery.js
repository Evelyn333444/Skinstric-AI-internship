import React from 'react'
import './gallery.css'
import BackButton from 'assets/backbutton.svg'
import ScanFace from 'assets/scanFace.svg'
import AccessGallery from 'assets/accessGallery.svg'

function Gallery({ onBackClick, onSelectPhotoClick, onScanFaceClick }) {
  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    }
  };

  const handleScanTheFace = () => {
    if (onScanFaceClick) {
      onScanFaceClick();
    }
  };

  const handleSelectPhotoGallery = () => {
    if (onSelectPhotoClick) {
      onSelectPhotoClick();
    }
  };

  return (
    <div className="gallery-page">
      <header>
        <div className="header-left-intro">
          <span className="header-title">SKINSTRIC</span>
          <span className="header-intro">[INTRO]</span>
        </div>
      </header>
      <main>
        <div className="body-left-intro">
          <span className="intro-text">TO START ANALYSIS</span>
        </div>
        <div className="body-center">
            <div className="gallery-card">
              <div className="gallery-rombuses" aria-hidden="true">
                <div className="gallery-romb1">
                  <div className="gallery-romb2">
                    <div className="gallery-romb3" />
                  </div>
                </div>
              </div>
              <button type="button" className="scan-the-face" onClick={handleScanTheFace}>
                <img src={ScanFace} alt="Scan Face" className="gallery-image" />
              </button>
            </div>
            <div className="gallery-card">
              <div className="gallery-rombuses" aria-hidden="true">
                <div className="gallery-romb1">
                  <div className="gallery-romb2">
                    <div className="gallery-romb3" />
                  </div>
                </div>
              </div>
              <button type="button" className="select-Photo-Gallery" onClick={handleSelectPhotoGallery}>
                <img src={AccessGallery} alt="Access Gallery" className="gallery-image" />
              </button>
            </div>
        </div>
      </main>
      <footer className="gallery-footer">
        <button type="button" className="back-button" onClick={handleBackClick}>
          <img src={BackButton} alt="Back" />
        </button>
      </footer>
    </div>
  )
}

export default Gallery
