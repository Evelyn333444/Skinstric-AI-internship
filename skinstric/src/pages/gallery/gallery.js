import React from 'react'
import BackButton from './assets/backbutton.svg'
import ScanFace from './assets/scanFace.svg'
import AccessGallery from './assets/accessGallery.svg'

function gallery() {

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
