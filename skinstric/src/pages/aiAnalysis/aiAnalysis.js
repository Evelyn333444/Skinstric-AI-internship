import React from 'react'
import AnalysisHeader from 'assets/analysisHeader.svg'
import BackButton from 'assets/backbutton.svg'
import SummaryDiagramInteractive from '../../components/summaryDiagramInteractive/summaryDiagramInteractive'
import GetSummary from '../../assets/getSummary.svg'
import './aiAnalysis.css'

function AiAnalysis({ onBackClick, onDemographicsClick }) {
  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    }
  };

  const handleGetSummary = () => {
    if (onDemographicsClick) {
      onDemographicsClick();
    }
  };

  return (
    <div className="ai-analysis-page">
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
            <span className="body-left-not-bold-text">
              A.I. HAS ESTIMATED THE FOLLOWING. FIX ESTIMATED INFORMATION IF NEEDED.
            </span>
          </div>
        </div>
        
        <div className="body-center">
          <div className="analysis-rombuses" aria-hidden="true">
            <div className="romb1-analysis" />
            <div className="romb2-analysis" />
            <div className="romb3-analysis" />
          </div>
          <div className="summary-diagram-container">
            <SummaryDiagramInteractive onDemographicsClick={onDemographicsClick} />
          </div>
        </div>
      </main>
      <footer className="page-footer">
        <div className="footer-left">
          <button type="button" className="back-button" onClick={handleBackClick}>
            <img src={BackButton} alt="" />
          </button>
          <span className="back-button-text">Back</span>
        </div>
        <div className="footer-right">
          <span className="get-summary-text">Get Summary</span>
          <button type="button" className="get-summary-btn" onClick={handleGetSummary}>
            <img src={GetSummary} alt="" />
          </button>
        </div>
        </footer>
    </div>
  )
}

export default AiAnalysis
