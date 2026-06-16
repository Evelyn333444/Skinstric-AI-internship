import React, { useEffect } from 'react';
import './prepareAnalysis.css';

function PrepareAnalysis({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="prepare-analysis-page">
      <div className="body-context">
        <div className="prepare-square-1">
          <div className="prepare-square-2">
            <div className="prepare-square-3">
              <span className="body-text">PREPARING YOUR ANALYSIS...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrepareAnalysis;
