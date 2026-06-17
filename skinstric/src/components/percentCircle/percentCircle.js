import React from "react";
import "./percentCircle.css";

const percentCircle = ({ percentage = 0 }) => {
  const radius = 117;
  const strokeWidth = 4;
  const size = radius * 2 + strokeWidth * 2;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circle-container" style={{ width: size, height: size }}>
      <svg className="progress-svg" width={size} height={size}>
        <circle
          className="bg-circle"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="percent-circle"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="percentage-text">{percentage}%</div>
    </div>
  );
};

export default percentCircle;