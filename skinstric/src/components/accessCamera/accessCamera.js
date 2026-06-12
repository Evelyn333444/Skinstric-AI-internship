import React from 'react'

function accessCamera() {
  return (
    <div>
      <div className="pop-up-alert">
        <div className="alert-text">
        <span className="alert-question">ALLOW A.I. TO ACCESS YOUR CAMERA</span>
      </div>
      <div className="rect-2789"></div>
      <div className="options">
        <span className="deny-camera">DENY</span>
        <span className="allow-camera">ALLOW</span>
      </div>
      </div>
    </div>
  )
}

export default accessCamera
