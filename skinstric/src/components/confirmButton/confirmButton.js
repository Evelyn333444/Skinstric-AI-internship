import React from 'react'
import './confirmButton.css';
import Confirm from 'assets/confirmButton.svg';

function confirmButton() {
  return (
    <div>
      <button type="button" className="confirm-button" >
      <div className="small-black-box">
        <div className="image-text">
          <img src={Confirm} alt="Confirm" />
        </div>
      </div>
    </button>
    </div>
  )
}

export default confirmButton
