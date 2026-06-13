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
      <main className="home-main">
        <div className="body-left">
          <ExpandingRect>
            <img src={discoverai} className="discover-ai-logo" alt="Discover AI" />
          </ExpandingRect>
        </div>
        <div className="body-content">
            <span className="center-text">Sophisticated Skincare</span>
        </div>
        <div className="body-right">
          <div className="take-test-hover-area" onMouseEnter={() => setShowPreview(true)} onMouseLeave={() => setShowPreview(false)}>
            <ExpandingRect onClick={onTakeTestClick}>
              <img src={taketest} className="take-test-logo" alt="" />
            </ExpandingRect>
          </div>
        </div>
        </main>
      <footer>
         <div className="footer-content">
            <span className="footer-text">SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALIZED ROUTINE TAILORED TO WHAT YOUR SKIN NEEDS.</span>
        </div>
      </footer>
    </div>
  )
}

export default Home