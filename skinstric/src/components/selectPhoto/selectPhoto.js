import React, { useRef, useState } from 'react';
import BackButton from 'assets/backbutton.svg';
import './selectPhoto.css';

function SelectPhoto({ onBackClick }) {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    }
  };

  const handleChoosePhoto = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    setFileName(file.name);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="select-photo-page">
      <header>
        <div className="header-left-intro">
          <span className="header-title">SKINSTRIC</span>
          <span className="header-intro">[INTRO]</span>
        </div>
      </header>
      <main>
        <div className="body-left-intro">
          <span className="intro-text">TO START ANALYSIS</span>
        </div>
        <div className="select-photo-content">
          <div className="select-photo-card">
            {preview ? (
              <img src={preview} alt="Selected preview" className="select-photo-preview" />
            ) : (
              <div className="select-photo-placeholder">
                <span className="select-photo-placeholder-text">SELECT A PHOTO FROM YOUR GALLERY</span>
              </div>
            )}
            <button type="button" className="select-photo-btn" onClick={handleChoosePhoto}>
              {preview ? 'Choose a Different Photo' : 'Choose Photo'}
            </button>
            {fileName && (
              <span className="select-photo-filename">{fileName}</span>
            )}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden-input"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      </main>
      <footer>
        <button type="button" className="back-button" onClick={handleBackClick}>
          <img src={BackButton} alt="Back" />
        </button>
      </footer>
    </div>
  );
}

export default SelectPhoto;
