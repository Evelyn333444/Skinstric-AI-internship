import React, { useState } from 'react'
import AnalysisHeader from './assets/aiAnalysis.svg'
import BackButton from './assets/backbutton.svg'
import GetSummary from './assets/getSummary.svg'
import SummaryDiagram from './assets/summaryDiagram.svg'
import './aiAnalysis.css'

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

  const [hoverRombText, setHoverRombText] = useState(false);

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
            <div className="rombuses">
            {hoverRombText ? (
            <div className="romb1">
                <div className="romb2">
                    <div className="romb3">
                        <div className="summary-diagram-icon">
                            <img src={SummaryDiagram} alt=""
                            onMouseEnter={() => setHoverRombText(true)}
                            onMouseLeave={() => setHoverRombText(false)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            )}
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
