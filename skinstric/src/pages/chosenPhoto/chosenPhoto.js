import React, { useState } from 'react';
import './PhotoUpload.css'; // We'll create this file next

export default function PhotoUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a local preview URL for the image
      const previewUrl = URL.createObjectURL(file);
      setSelectedImage(previewUrl);
    }
  };

   return (
    <div className="upload-container">
      <div className="upload-box">
        {selectedImage ? (
          <div className="image-preview-container">
            <img src={selectedImage} alt="User Selected" className="image-preview" />
            <button className="change-btn" onClick={() => document.getElementById('fileInput').click()}>
              Choose Different Photo
            </button>
          </div>
        ) : (
          <div className="empty-state">
            <p>No photo selected</p>
            <button className="upload-btn" onClick={() => document.getElementById('fileInput').click()}>
              Select from Computer
            </button>
          </div>
        )}

        {/* Hidden File Input */}
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
}