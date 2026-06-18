import React, { useState, useRef } from 'react'
import BackButton from 'assets/backbutton.svg'
import './origine.css'
import Proceed from 'assets/proceed.svg'
import { SKINSTRIC_USER_NAME_KEY, SKINSTRIC_USER_LOCATION_KEY } from '../introduction/introduce'

const PHASE_ONE_API = 'https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne';

function Origine({ onBackClick, onProceedSuccess }) {
  const [location, setLocation] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef(null);
  const hasStartedTyping = location.length > 0;
  const hasSearchText = location.trim().length > 0;
  const isTyping = isFocused || hasStartedTyping;

  const handlePromptClick = () => {
    inputRef.current?.focus();
  };

  const handleInputChange = (e) => {
    setLocation(e.target.value);
    setError('');
  };

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    }
  };

  const submitCredentials = async () => {
    const name = sessionStorage.getItem(SKINSTRIC_USER_NAME_KEY);
    const trimmedLocation = location.trim();

    if (!name) {
      setError('Please enter your name on the previous screen.');
      return;
    }

    if (!trimmedLocation) {
      setError('Please enter your location.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(PHASE_ONE_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, location: trimmedLocation }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message || 'Unable to submit credentials.');
        return;
      }

      sessionStorage.setItem(SKINSTRIC_USER_LOCATION_KEY, trimmedLocation);

      if (onProceedSuccess) {
        onProceedSuccess(trimmedLocation);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleProceedClick = () => {
    if (!isSubmitting) {
      submitCredentials();
    }
  };

  return (
    <>
      <div className="origine-page">
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

          <div className={`intro-content ${isTyping ? 'is-typing' : 'is-intro'}`}>
            <div className={`rombuses ${isTyping ? 'typing-rombuses' : 'intro-rombuses'}`}>
              <div className="romb1" />
              <div className="romb2" />
              <div className="romb3" />
            </div>
            <div className="intro-form">
              <span className="intro-type-hint">CLICK TO TYPE</span>
              <div className={`inline-prompt-field ${hasStartedTyping ? 'has-value' : ''}`}>
                {!hasStartedTyping && (
                  <button type="button" className="rombus-text prompt-label" onClick={handlePromptClick}>
                    Where Are You From? (country and/or state)
                  </button>
                )}
                <input
                  ref={inputRef}
                  type="text"
                  className="response-input inline-response-input"
                  value={location}
                  onChange={handleInputChange}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && hasSearchText && !isSubmitting) {
                      handleProceedClick();
                    }
                  }}
                  aria-label="Where are you from"
                />
              </div>
              {error && <span className="api-error-message">{error}</span>}
              {isSubmitting && <span className="api-loading-message">Submitting...</span>}
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
        {hasSearchText && !isSubmitting && (
          <div className="footer-right">
            <span className="proceed-text">Proceed</span>
            <button type="button" className="proceed-btn" onClick={handleProceedClick}>
              <img src={Proceed} alt="" />
            </button>
          </div>
        )}
      </footer>
    </>
  )
}

export default Origine
