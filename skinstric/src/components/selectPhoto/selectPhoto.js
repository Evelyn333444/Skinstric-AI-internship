import React, { useRef } from 'react';
import './selectPhoto.css';

export default function PhotoSelector() {
  const fileInputRef = useRef(null);

  const handleTriggerClick = () => {
    // Opens the native file/photo picker
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
      // Process your photo here (e.g., upload or display preview)
    }
  };

  return (
    <div className="picker-container">
      <button className="select-btn" onClick={handleTriggerClick}>
        Choose Photo
        </button>
      
      <input
        type="file"
        ref={fileInputRef}
        className="hidden-input"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
}