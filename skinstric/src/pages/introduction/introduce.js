import React from 'react'
import './introduce.css'
import BackButton from './assets/backbutton.svg'

function introduce() {
  return (
    <div>
        <header>
        <div className="header-left-intro">
          <span className="header-title">SKINSTRIC</span>
          <span className="header-intro">[INTRO]</span>
        </div>
        </header>
        <body>
        <div className="body-left-intro">
            <span className="intro-text">TO START ANALYSIS</span>
        </div>
        <div className="intro-content">
            <div className="rombuses">
                <div className="romb1">
                <div className="romb2">
                <div className="romb3">
                    <button className="intro-type-btn">CLICK TO TYPE</button>
                    <span className="rombus-text">Introduce Yourself</span>
                    // Fix the width and height of romb1 and romb2. they should not be the same as romb3, but I have not been able to look at them at a closer level
                </div>
                </div>
                </div>
            </div>
        </div>
        </body>
        <footer>
            <img src={require('./assets/backbutton.svg')} className="back-button"/>
        </footer>
    </div>
  )
}

export default introduce
