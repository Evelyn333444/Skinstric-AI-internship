import React, { useState } from 'react'
import './introduce.css'
import BackButton from './assets/backbutton.svg'
import Proceed from './assets/proceed.svg'

function introduce({ onBackClick, onSearchSubmit }) {
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
    if (onSearchSubmit) {
      onSearchSubmit();
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
        <div>
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
                          Introduce Yourself
                        </span>
                        {showSearchBar && (
                          <input
                            type="text"
                            className="response-input"
                            placeholder="Type your response..."
                            onChange={handleInputChange}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && hasSearchText && onSearchSubmit) {
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
                        {/* Fix the width and height of romb1 and romb2. they should not be the same as romb3, but I have not been able to look at them at a closer level */}
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
                      Introduce Yourself
                    </span>
                    {showSearchBar && (
                      <input
                        type="text"
                        className="response-input"
                        placeholder="Type your response..."
                        onChange={handleInputChange}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && hasSearchText && onSearchSubmit) {
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
                    {/* Fix the width and height of romb1 and romb2. they should not be the same as romb3, but I have not been able to look at them at a closer level */}
                  </div>
                )}
            </div>
        </div>
        </div>
        <footer>
            <button className="back-button" onClick={handleBackClick}>
              <img src={BackButton} alt="Back" />
            </button>
        </footer>
    </div>
  )
}

export default introduce
