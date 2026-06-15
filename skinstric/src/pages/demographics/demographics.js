import React from 'react'
import AnalysisHeader from 'assets/analysisHeader.svg'
import BackButton from 'assets/backbutton.svg'
import Reset from 'assets/reset.svg'
import Confirm from 'assets/confirm.svg'
import './demographics.css'
import PercentCircle from '../../components/percentCircle/percentCircle'

function demographics( onResetClick, onBackClick, onConfirmClick ) {

    const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    }
  };

  const handleResetClick = () => {
    if (onResetClick) {
        onResetClick();
    }
  }

  const handleConfirmClick = () => {
    if (onConfirmClick) {
        onConfirmClick();
    }
  }

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
        </div>
        <div className="body-center">
            <div className="sidebar-buttons">
                <div className="demographics-buttons-left">
                    <button className="race">RACE</button>
                        //Fix this so that the Type of race shows up above the RACE, but depends on what name the API had for that//
                        //Might have to create a small component for it
                </div>
                <div className="age-button-left">
                    <button className="age-button">AGE</button>
                        //Again, fix this when you add in the API
                </div>
                <div className="gender-button-left">
                    <button className="gender-button">SEX</button>
                        //Again, fix this when you add in the API
                </div>
            </div>
            <div className="results-box">
                <span className="type-race">Type of Race</span>
            </div>
            <PercentCircle />
            <div className="ai-confidence-percent-box">
                <div className=""></div>
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

export default demographics
