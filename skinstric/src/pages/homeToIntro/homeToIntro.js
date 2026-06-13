import React from 'react'
import taketest from 'assets/taketest.svg'
import './homeToIntro.css'

function HomeToIntro({ onTakeTestClick }) {
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
    <main>
    <div className="home-to-intro-preview">
      <button className="take-test-logo" onClick={onTakeTestClick}>
        <img src={taketest} alt="" />
      </button>
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

export default HomeToIntro
