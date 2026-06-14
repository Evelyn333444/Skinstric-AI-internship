import React, { useState } from 'react'
import './introduce.css'
import BackButton from 'assets/backbutton.svg'
import Proceed from 'assets/proceed.svg'

function Introduce({ onBackClick, onSearchSubmit }) {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [hasSearchText, setHasSearchText] = useState(false);

  const handleTypeClick = () => {
    setShowSearchBar(true);
  };

  const handleInputChange = (e) => {
    setHasSearchText(e.target.value.length > 0);
  };

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    }
  };

  const handleProceedClick = () => {
    if (onSearchSubmit) {
      onSearchSubmit();
    }
  };

  return (
    <><div className="intro-page">
      <header>
        <div className="header-left-intro">
          <span className="header-title">SKINSTRIC</span>
          <span className="header-intro">[INTRO]</span>
        </div>
      </header>
      <div>
        <div className="body-left-intro">
          <span className="intro-text">TO START ANALYSIS</span>
        </div>

              <div className={`intro-content ${showSearchBar ? "is-typing" : "is-intro"}`}>
  <div className={`rombuses ${showSearchBar ? "typing-rombuses" : "intro-rombuses"}`}>
    <div className="romb1" />
    <div className="romb2" />
    <div className="romb3" />
  </div>
  <div className="intro-form">
    {!showSearchBar ? (
      <>
        <button className="intro-type-btn" onClick={handleTypeClick}>
          CLICK TO TYPE
        </button>
        <span className="rombus-text">Introduce Yourself</span>
      </>
    ) : (
      <input
        type="text"
        className="response-input"
        placeholder="Type your response..."
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter" && hasSearchText && onSearchSubmit) {
            onSearchSubmit();
          }
        }}
        autoFocus
      />
    )}
    {showSearchBar && hasSearchText && (
      <button className="proceed-btn" onClick={handleProceedClick}>
        <img src={Proceed} alt="Proceed" />
      </button>
    )}
  </div>
</div>
      </div>
    </div><footer>
        <button className="back-button" onClick={handleBackClick}>
          <img src={BackButton} alt="" />
        </button>
      </footer></>
  )
}

export default Introduce
