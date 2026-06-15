import React from 'react';
import BackButton from 'assets/backbutton.svg';
import './chosenPhoto.css';

function ChosenPhoto({ selectedPhoto, onBackClick }) {
  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
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
      </footer>
    </div>
  );
}

export default ChosenPhoto;
