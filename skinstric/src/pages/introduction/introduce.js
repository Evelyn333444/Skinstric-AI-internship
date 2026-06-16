import React, { useState } from 'react'
import './introduce.css'
import BackButton from 'assets/backbutton.svg'
import Proceed from 'assets/proceed.svg'

export const SKINSTRIC_USER_NAME_KEY = 'skinstricPhaseOneName';
export const SKINSTRIC_USER_LOCATION_KEY = 'skinstricPhaseOneLocation';
export const SKINSTRIC_CONFIRMED_PHOTO_KEY = 'skinstricConfirmedPhoto';

function Introduce({ onBackClick, onSearchSubmit }) {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const hasSearchText = name.trim().length > 0;

  const handleTypeClick = () => {
    setShowSearchBar(true);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
    setError('');
  };

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    }
  };

  

  const handleProceedClick = async () => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      setError('Please enter your name.');
      return;
    }

    sessionStorage.setItem(SKINSTRIC_USER_NAME_KEY, trimmedName);

    if (onSearchSubmit) {
      onSearchSubmit(trimmedName);
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
        <span className="rombus-text">Introduce Yourself (state your name)</span>
      </>
    ) : (
      <input
        type="text"
        className="response-input"
        placeholder="Type your response..."
        value={name}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter" && hasSearchText) {
            handleProceedClick();
          }
        }}
        autoFocus
      />
    )}
    {error && <span className="api-error-message">{error}</span>}
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
