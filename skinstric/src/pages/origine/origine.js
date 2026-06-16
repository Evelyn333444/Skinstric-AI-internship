import React, { useState } from 'react'
import BackButton from 'assets/backbutton.svg'
import './origine.css'
import Proceed from 'assets/proceed.svg'
import { SKINSTRIC_USER_NAME_KEY, SKINSTRIC_USER_LOCATION_KEY } from '../introduction/introduce'

const PHASE_ONE_API = 'https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne';

function Origine({ onBackClick, onProceedSuccess }) {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [location, setLocation] = useState('');
  const [hoverRombText, setHoverRombText] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const hasSearchText = location.trim().length > 0;

  const handleTypeClick = () => {
    setShowSearchBar(true);
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

      if (!response.ok) {
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
                <button className="intro-type-btn" onClick={handleTypeClick}>CLICK TO TYPE</button>
                <span
                  className="rombus-text"
                  onMouseEnter={() => setHoverRombText(true)}
                  onMouseLeave={() => setHoverRombText(false)}
                >
                  Where Are You From? (country and/or state)
                </span>
                {showSearchBar && (
                  <input
                    type="text"
                    className="response-input"
                    placeholder="Type your response..."
                    value={location}
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && hasSearchText && !isSubmitting) {
                        handleProceedClick();
                      }
                    }}
                    autoFocus
                  />
                )}
                {error && <span className="api-error-message">{error}</span>}
                {isSubmitting && <span className="api-loading-message">Submitting...</span>}
                {showSearchBar && hasSearchText && !isSubmitting && (
                  <button className="proceed-btn" onClick={handleProceedClick}>
                    <img src={Proceed} alt="Proceed" />
                  </button>
                )}
              </div>
                </div>
              </div>
            
          </div>
        </div>
      </main>
      <footer>
        <div className="back-option">
          <button className="back-button" onClick={handleBackClick}>
            <img src={BackButton} alt="Back" />
          </button>
        </div>
      </footer>
    </div>
  )
}

export default Origine

