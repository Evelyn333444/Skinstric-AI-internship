import React from 'react';
import BackButton from 'assets/backbutton.svg';
import Proceed from 'assets/proceed.svg';
import './chosenPhoto.css';

function ChosenPhoto({ selectedPhoto, onBackClick, onProceedClick }) {
  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    }
  };

  const handleProceedClick = () => {
    if (selectedPhoto && onProceedClick) {
      onProceedClick(selectedPhoto);
    }
  };

  return (
    <div className="chosen-photo-page">
      {selectedPhoto ? (
        <img
          src={selectedPhoto}
          alt="User selected"
          className="chosen-photo-image"
        />
      ) : (
        <div className="chosen-photo-empty">
          <p>No photo selected</p>
        </div>
      )}
      <footer className="chosen-photo-footer">
        <button type="button" className="back-button" onClick={handleBackClick}>
          <img src={BackButton} alt="Back" />
        </button>
        {selectedPhoto && (
          <button type="button" className="proceed-btn" onClick={handleProceedClick}>
            <img src={Proceed} alt="Proceed" />
          </button>
        )}
      </footer>
    </div>
  );
}

export default ChosenPhoto;
