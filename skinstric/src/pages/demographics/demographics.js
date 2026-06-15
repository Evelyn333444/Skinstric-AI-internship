import React from 'react'
import AnalysisHeader from 'assets/analysisHeader.svg'
import BackButton from 'assets/backbutton.svg'
import Reset from 'assets/reset.svg'
import Confirm from 'assets/confirm.svg'
import './demographics.css'
import PercentCircle from '../../components/percentCircle/percentCircle'
import {
  SKINSTRIC_USER_NAME_KEY,
  SKINSTRIC_USER_LOCATION_KEY,
} from '../introduction/introduce'

function Demographics({ onResetClick, onBackClick, onConfirmClick, userName, userLocation }) {
  const displayName = userName || sessionStorage.getItem(SKINSTRIC_USER_NAME_KEY) || '';
  const displayLocation = userLocation || sessionStorage.getItem(SKINSTRIC_USER_LOCATION_KEY) || '';

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    }
  };

  const handleResetClick = () => {
    if (onResetClick) {
      onResetClick();
    }
  };

  const handleConfirmClick = () => {
    if (onConfirmClick) {
      onConfirmClick();
    }
  };

  return (
    <div>
      <header>
        <div className="header-left">
          <img src={AnalysisHeader} alt="" />
        </div>
      </header>
      <main>
        <div className="body-left">
          <div className="body-left-bold">
            <span className="body-left-bold-text">A.I. ANALYSIS</span>
          </div>
          <div className="body-left-big-bold">
            <span className="body-left-big-bold-text">DEMOGRAPHICS</span>
          </div>
          <div className="body-left-no-bold">
            <span className="body-left-no-bold-text">PREDICTED RACE AND AGE</span>
          </div>
          {(displayName || displayLocation) && (
            <div className="body-left-user-credentials">
              {displayName && (
                <span className="body-left-user-name">NAME: {displayName.toUpperCase()}</span>
              )}
              {displayLocation && (
                <span className="body-left-user-location">FROM: {displayLocation.toUpperCase()}</span>
              )}
            </div>
          )}
        </div>
        <div className="body-center">
          <div className="sidebar-buttons">
            <div className="demographics-buttons-left">
              <button className="race">RACE</button>
            </div>
            <div className="age-button-left">
              <button className="age-button">AGE</button>
            </div>
            <div className="gender-button-left">
              <button className="gender-button">SEX</button>
            </div>
          </div>
          <div className="results-box">
            <span className="type-race">Type of Race</span>
          </div>
          <PercentCircle />
          <div className="ai-confidence-percent-box">
            <div className="ai-confidence">
              <span className="title-row-text">A.I. CONFIDENCE</span>
            </div>
            <div className="types">
              <div className="type-1">
                <span className="type-1-classification">RACE #1</span>
                <span className="type-1-percentage">96%</span>
              </div>
              <div className="type-2">
                <span className="type-2-classification">RACE #2</span>
                <span className="type-2-percentage">6%</span>
              </div>
              <div className="type-3">
                <span className="type-3-classification">RACE #3</span>
                <span className="type-3-percentage">3%</span>
              </div>
              <div className="type-4">
                <span className="type-4-classification">RACE #4</span>
                <span className="type-4-percentage">2%</span>
              </div>
              <div className="type-5">
                <span className="type-5-classification">RACE #5</span>
                <span className="type-5-percentage">0%</span>
              </div>
              <div className="type-6">
                <span className="type-6-classification">RACE #6</span>
                <span className="type-6-percentage">0%</span>
              </div>
              <div className="type-7">
                <span className="type-7-classification">RACE #7</span>
                <span className="type-7-percentage">0%</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <button className="back-button" onClick={handleBackClick}>
          <img src={BackButton} alt="Back" />
        </button>
        <button className="reset-button" onClick={handleResetClick}>
          <img src={Reset} alt="" />
        </button>
        <div className="footer-text-layout">
          <span className="footer-text">If A.I estimate is wrong, select the correct one</span>
        </div>
        <button className="confirm-button" onClick={handleConfirmClick}>
          <img src={Confirm} alt="" />
        </button>
      </footer>
    </div>
  )
}

export default Demographics
