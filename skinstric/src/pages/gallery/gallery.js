import React from 'react'
import './gallery.css'
import BackButton from './assets/backbutton.svg'
import ScanFace from './assets/scanFace.svg'
import AccessGallery from './assets/accessGallery.svg'

function gallery({ onBackClick }) {
  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    }
  };

  return (
    <div>
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
              <div className="gallery-romb1">
                <div className="gallery-romb2">
                  <div className="gallery-romb3">
                    <div className="gallery-image-wrapper">
                      <img src={ScanFace} alt="Scan Your Face" className="gallery-image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-card">
              <div className="gallery-romb1">
                <div className="gallery-romb2">
                  <div className="gallery-romb3">
                    <div className="gallery-image-wrapper">
                      <img src={AccessGallery} alt="Access Gallery" className="gallery-image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </main>
      <footer>
              <button className="back-button" onClick={handleBackClick}>
                <img src={BackButton} alt="Back" />
              </button>
            </footer>
    </div>
  )
}

export default gallery
