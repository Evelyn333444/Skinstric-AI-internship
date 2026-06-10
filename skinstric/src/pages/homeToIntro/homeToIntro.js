import React from 'react'
import taketest from '../home/assets/taketest.svg'
import './homeToIntro.css'

function HomeToIntro({ onTakeTestClick }) {
  return (
    <div className="home-to-intro-preview">
      <div className="preview-header">Preview</div>
      <div className="preview-body">
        <span className="preview-text">Ready to begin your personalized routine?</span>
      </div>
      <button className="preview-continue-btn" onClick={onTakeTestClick}>
        Go to Introduction
      </button>
    </div>
  )
}

export default HomeToIntro
