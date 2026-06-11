import React from 'react'
import AnalysisHeader from './assets/aiAnalysis.svg'
import BackButton from './assets/backbutton.svg'
import Reset from './assets/reset.svg'
import './demographics.css'

function demographics( onResetClick, onBackClick ) {

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
        </main>
        <footer>
            <button className="back-button" onClick={handleBackClick}>
                          <img src={BackButton} alt="Back" />
                        </button>
            <button className="reset-button" onClick={handleResetClick}>
                <img src={Reset} alt="" />
            </button>
        </footer>
    </div>
  )
}

export default demographics
