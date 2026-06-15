import React from 'react'
import SetUpCamera from 'assets/setupcamera.svg'
import SetUpCameraBetterResults from 'assets/setUpCameraBetterResults.svg'

function settingUpCamera() {

    const [hoverRombText, setHoverRombText] = useState(false);

  return (
    <div>
      <main>
        <div className="body-content">
        <div className="rombuses">
        {hoverRombText ? (
        <div className="romb1">
        <div className="romb2">
        <div className="romb3">
        <div className="set-up-camera-icon">
            <img src={SetUpCamera} alt=""></img>
            onMouseEnter={() => setHoverRombText(true)}
            onMouseLeave={() => setHoverRombText(false)}
        </div>
        </div>
        </div>
        </div>
        )}
        </div>
        <div className="text">
            <img src={SetUpCameraBetterResults} alt=""></img>
        </div>
        </div>
      </main>
    </div>
  )
}

export default settingUpCamera
