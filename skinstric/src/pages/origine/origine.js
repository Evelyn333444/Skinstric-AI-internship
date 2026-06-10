import React, { useState } from 'react'
import BackButton from './assets/backbutton.svg'
import './origine.css'
import Proceed from './assets/proceed.svg'

function Origine({ onBackClick }) {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [hasSearchText, setHasSearchText] = useState(false);
  const [hoverRombText, setHoverRombText] = useState(false);

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
    if (onBackClick) {
      onBackClick();
    }
  };

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
            {hoverRombText ? (
              <div className="romb1">
                <div className="romb2">
                  <div className="romb3">
                    <button className="intro-type-btn" onClick={handleTypeClick}>CLICK TO TYPE</button>
                    <span
                      className="rombus-text"
                      onMouseEnter={() => setHoverRombText(true)}
                      onMouseLeave={() => setHoverRombText(false)}
                    >
                      Where Are You From?
                    </span>
                    {showSearchBar && (
                      <input
                        type="text"
                        className="response-input"
                        placeholder="Type your response..."
                        onChange={handleInputChange}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && hasSearchText && onBackClick) {
                            onBackClick();
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
            ) : (
              <div className="romb3">
                <button className="intro-type-btn" onClick={handleTypeClick}>CLICK TO TYPE</button>
                <span
                  className="rombus-text"
                  onMouseEnter={() => setHoverRombText(true)}
                  onMouseLeave={() => setHoverRombText(false)}
                >
                  Where Are You From?
                </span>
                {showSearchBar && (
                  <input
                    type="text"
                    className="response-input"
                    placeholder="Type your response..."
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && hasSearchText && onBackClick) {
                        onBackClick();
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
            )}
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

export default Origine

