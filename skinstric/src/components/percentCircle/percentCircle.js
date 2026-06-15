import React from "react";
import "./percentCircle.css";

const percentCircle = ({ percentage = 0 }) => {
  const radius = 60; // Circle radius
  const strokeWidth = 10; // Border thickness
  const circumference = 2 * Math.PI * radius;
  
  // Calculate how much stroke to hide based on the percentage
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circle-container">
      <svg className="progress-svg" width="160" height="160">
        {/* Background/Track Circle */}
        <circle
          className="bg-circle"
          cx="80"
          cy="80"
          r={radius}
          strokeWidth={strokeWidth}
        />
        {/* Percentage Border Circle */}
        <circle
          className="percent-circle"
          cx="80"
          cy="80"
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      {/* Percentage text in the clear center */}
      <div className="percentage-text">{percentage}%</div>
    </div>
  );
};

export default percentCircle;