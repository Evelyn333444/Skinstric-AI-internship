import React, { useState, useRef } from 'react'
import './introduce.css'
import BackButton from 'assets/backbutton.svg'
import Proceed from 'assets/proceed.svg'

export const SKINSTRIC_USER_NAME_KEY = 'skinstricPhaseOneName';
export const SKINSTRIC_USER_LOCATION_KEY = 'skinstricPhaseOneLocation';
export const SKINSTRIC_CONFIRMED_PHOTO_KEY = 'skinstricConfirmedPhoto';

function Introduce({ onBackClick, onSearchSubmit }) {
  const [name, setName] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef(null);
  const hasStartedTyping = name.length > 0;
  const hasSearchText = name.trim().length > 0;
  const isTyping = isFocused || hasStartedTyping;

  const handlePromptClick = () => {
    inputRef.current?.focus();
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
    <div>
    <div className="intro-page">
      <header className="app-header">
        <div className="header-left-intro">
          <span className="header-title">SKINSTRIC</span>
          <span className="header-intro">[INTRO]</span>
        </div>
      </header>
      <div>
        <div className="body-left-intro">
          <span className="intro-text">TO START ANALYSIS</span>
        </div>

              <div className={`intro-content ${isTyping ? "is-typing" : "is-intro"}`}>
  <div className={`rombuses ${isTyping ? "typing-rombuses" : "intro-rombuses"}`}>
    <div className="romb1" />
    <div className="romb2" />
    <div className="romb3" />
  </div>
  <div className="intro-form">
    <span className="intro-type-hint">CLICK TO TYPE</span>
    <div className={`inline-prompt-field ${hasStartedTyping ? 'has-value' : ''}`}>
      {!hasStartedTyping && (
        <button type="button" className="rombus-text prompt-label" onClick={handlePromptClick}>
          Introduce Yourself (state your name)
        </button>
      )}
      <input
        ref={inputRef}
        type="text"
        className="response-input inline-response-input"
        value={name}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && hasSearchText) {
            handleProceedClick();
          }
        }}
        aria-label="Introduce yourself"
      />
    </div>
    {error && <span className="api-error-message">{error}</span>}
  </div>
</div>
      </div>
    </div>
    <footer className="page-footer">
        <div className="footer-left">
          <button type="button" className="back-button" onClick={handleBackClick}>
            <img src={BackButton} alt="" />
          </button>
          <span className="back-button-text">Back</span>
        </div>
        {hasSearchText && (
          <div className="footer-right">
            <span className="proceed-text">Proceed</span>
            <button type="button" className="proceed-btn" onClick={handleProceedClick}>
              <img src={Proceed} alt="" />
            </button>
          </div>
        )}
      </footer>
      </div>
  )
}

export default Introduce
