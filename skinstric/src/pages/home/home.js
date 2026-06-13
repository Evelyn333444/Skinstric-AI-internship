import React, { useState } from 'react'
import './home.css'
import discoverai from 'assets/discoverai.svg'
import taketest from 'assets/taketest.svg'
import HomeToIntro from '../homeToIntro/homeToIntro'
import ExpandingRect from '../../components/expandRectangle/expandRectangle'

function Home({ onTakeTestClick }) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="home-page">
      <header className="app-header">
        <div className="header-left">
          <span className="header-title">SKINSTRIC</span>
          <span className="header-intro">[INTRO]</span>
        </div>
        <div className="header-right">
          <button className="enter-code-btn">ENTER CODE</button>
        </div>
      </header>
      <div>
        <div className="body-left">
          <div className="rectangle-2779">
            <img src={discoverai} className="discover-ai-logo" alt="Discover AI" />
          </div>
        </div>
        <div className="body-content">
            <span className="center-text">Sophisticated Skincare</span>
        </div>
        <div className="body-right">
          <div className="take-test-hover-area" onMouseEnter={() => setShowPreview(true)} onMouseLeave={() => setShowPreview(false)}>
            <ExpandingRect onClick={onTakeTestClick}>
              <img src={taketest} className="take-test-logo" alt="Take Test" />
            </ExpandingRect>
            {showPreview && (
              <div className="home-preview-wrapper">
                <HomeToIntro onTakeTestClick={onTakeTestClick} />
              </div>
            )}
          </div>
        </div>
      </div>
      <footer>
         <div className="footer-content">
            <span className="footer-text">SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALIZED ROUTINE TAILORED TO WHAT YOUR SKIN NEEDS.</span>
        </div>
      </footer>
    </div>
  )
}

export default Home