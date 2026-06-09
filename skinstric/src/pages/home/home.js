import React from 'react'
import './home.css'
import discoverai from './assets/discoverai.svg'
import taketest from './assets/taketest.svg'

function home({ onTakeTestClick }) {
  return (
    <div>
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
            <img src={discoverai} className="discover-ai-logo" alt="Discover AI" />
        </div>
        <div className="body-content">
            <span className="center-text">Sophisticated Skincare</span>
        </div>
        <div className="body-right">
            <button className="take-test-button" onClick={onTakeTestClick}>
              <img src={taketest} className="take-test-logo" />
            </button>
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

export default home