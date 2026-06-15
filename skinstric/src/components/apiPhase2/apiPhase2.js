import React, { useState } from 'react';
import './ImageUpload.css';

export default function ImageUpload() {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      
      // Convert image to Base64
      reader.readAsDataURL(file);
      
      reader.onloadend = () => {
        setPreview(reader.result); // Save Base64 string to state
        uploadImage(reader.result); // Trigger the API upload
      };
    }
    };

  const uploadImage = async (base64String) => {
    setLoading(true);
    try {
      const response = await fetch('https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Image: base64String }),
      });

      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error uploading:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Skin Analysis Image</h2>
      
      <label className="custom-file-upload">
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
        />
        Select Image
      </label>

      {loading && <p>Uploading...</p>}
      {preview && (
        <div className="image-preview">
          <img src={preview} alt="Uploaded Preview" />
        </div>
      )}
    </div>
  );
}