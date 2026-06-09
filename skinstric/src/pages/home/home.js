import React from 'react'
import './home.css'
import discoverai from './assets/discoverai.svg'
import taketest from './assets/taketest.svg'

function home() {
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
      <body>
        <div className="body-left">
            <img src={require('./assets/discoverai.svg')}  className="discover-ai-logo"/>
        </div>
        <div className="body-content">
            <span className= "center-text">Sophisticated Skincare</span>
        </div>
        <div className="body-right">
            <img src={require('./assets/taketest.svg')}  className="take-test-logo"/>
        </div>
      </body>
      <footer>
         <div className="footer-content">
            <span className="footer-text">SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALIZED ROUTINE TAILORED TO WHAT YOUR SKIN NEEDS.</span>
        </div>
      </footer>
    </div>
  )
}

export default home