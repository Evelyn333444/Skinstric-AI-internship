import React from 'react'
import AnalysisHeader from './assets/aiAnalysis.svg'
import BackButton from './assets/backbutton.svg'
import GetSummary from './assets/getSummary.svg'
import SummaryDiagram from './assets/summaryDiagram.svg'

function aiAnalysis() {

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
        <div className="header-left">
        <img src={AnalysisHeader} alt="" />
        </div>
      </header>
      <main>
        <div className="body-left">
        <div className="body-left-bold">
            <span className="body-left-bold-text">A.I. ANALYSIS</span>
        </div>
        <div className="body-left-not-bold">
            <span className="body-left-not-bold-text">A.I. HAS ESTIMATED THE FOLLOWING. FIX ESTIMATED INFORMATION IF NEEDED.</span>
        </div>
        </div>
        <div className="body-center">
            
            <div className="summary-diagram-icon">
                <img src={SummaryDiagram} alt="" />
            </div>
        </div>
      </main>
      <footer>
        <button className="back-button" onClick={handleBackClick}>
                        <img src={BackButton} alt="Back" />
                      </button>
        <button className="get-summary-button" onClick={handleProceedClick}>
                        <img src={GetSummary} alt="" />
                      </button>              
      </footer>
    </div>
  )
}

export default aiAnalysis
