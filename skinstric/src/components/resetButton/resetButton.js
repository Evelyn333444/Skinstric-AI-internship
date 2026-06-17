import React from 'react'
import "./resetButton.css";
import Reset from 'assets/reset.svg'

function resetButton() {
  return (
    <div>
      <div className="small-white-box" >
        <img src={Reset} alt="" />
      </div>
    </div>
  )
}

export default resetButton
