import React from 'react';
import './resetButton.css';
import Reset from 'assets/reset.svg';

function ResetButton({ onClick }) {
  return (
    <button type="button" className="reset-button" onClick={onClick}>
      <div className="small-white-box">
        <div className="image-text">
          <img src={Reset} alt="Reset" />
        </div>
      </div>
    </button>
  );
}

export default ResetButton;
