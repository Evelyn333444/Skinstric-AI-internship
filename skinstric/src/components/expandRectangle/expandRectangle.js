import React, { useState } from 'react';
import './expandRectangle.css';

const ExpandingRect = ({ children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container">
      <div 
        className={`rect-wrapper ${isHovered ? 'expand' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        <div className="dashed-rect rect-3"></div>
        <div className="dashed-rect rect-2"></div>
        <div className="dashed-rect rect-1"></div>

        <div className="rect-content">{children}</div>
      </div>
    </div>
  );
};

export default ExpandingRect;