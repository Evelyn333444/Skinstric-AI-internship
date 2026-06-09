import React from 'react'
import BackButton from './assets/backbutton.svg'
import './origine.css'

function Origine() {
  return (
    <div className="origine-page">
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
        <div className="intro-content">
          <div className="rombuses">
            <div className="romb1">
              <div className="romb2">
                <div className="romb3">
                  <button className="intro-type-btn">CLICK TO TYPE</button>
                  <span className="rombus-text">Where Are You From?</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <img src={BackButton} alt="Back" className="back-button" />
      </footer>
    </div>
  )
}

export default Origine

