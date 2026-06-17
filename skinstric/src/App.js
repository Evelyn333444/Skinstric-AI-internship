import React, { useState } from 'react';
import './App.css';
import Home from './pages/home/home';
import Introduce from './pages/introduction/introduce';
import Origine from './pages/origine/origine';
import Gallery from './pages/gallery/gallery';
import AIAnalysis from './pages/aiAnalysis/aiAnalysis';
import PrepareAnalysis from './pages/prepareAnalysis/prepareAnalysis';
import Demographics from './pages/demographics/demographics';
import SelectPhoto from './components/selectPhoto/selectPhoto';
import ChosenPhoto from './pages/chosenPhoto/chosenPhoto';
import ScanFace from './components/scanFace/scanFace';
import ScannedFaceFullScreen from './pages/scannedFaceFullScreen/scannedFaceFullScreen';
import {
  SKINSTRIC_USER_NAME_KEY,
  SKINSTRIC_USER_LOCATION_KEY,
  SKINSTRIC_CONFIRMED_PHOTO_KEY,
} from './pages/introduction/introduce';

function App() {
  const [page, setPage] = useState('home');
  const [userName, setUserName] = useState(
    () => sessionStorage.getItem(SKINSTRIC_USER_NAME_KEY) || ''
  );
  const [userLocation, setUserLocation] = useState(
    () => sessionStorage.getItem(SKINSTRIC_USER_LOCATION_KEY) || ''
  );
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [scannedPhoto, setScannedPhoto] = useState(null);
  const [confirmedPhoto, setConfirmedPhoto] = useState(
    () => sessionStorage.getItem(SKINSTRIC_CONFIRMED_PHOTO_KEY) || null
  );
  const [photoBackPage, setPhotoBackPage] = useState('selectPhoto');

  const handlePhotoConfirm = (photo) => {
    setConfirmedPhoto(photo);
    sessionStorage.setItem(SKINSTRIC_CONFIRMED_PHOTO_KEY, photo);
    setPage('prepareAnalysis');
  };

  return (
    <div className="App">
      {page === 'home' && <Home onTakeTestClick={() => setPage('intro')} />}
      {page === 'intro' && (
        <Introduce
          onBackClick={() => setPage('home')}
          onSearchSubmit={(name) => {
            setUserName(name);
            setPage('origine');
          }}
        />
      )}
      {page === 'origine' && (
        <Origine
          onBackClick={() => setPage('intro')}
          onProceedSuccess={(trimmedLocation) => {
            setUserLocation(trimmedLocation);
            setPage('gallery');
          }}
        />
      )}
      {page === 'gallery' && (
        <Gallery
          onBackClick={() => setPage('origine')}
          onSelectPhotoClick={() => setPage('selectPhoto')}
          onScanFaceClick={() => setPage('scanFace')}
        />
      )}
      {page === 'scanFace' && (
        <ScanFace
          onBackClick={() => setPage('gallery')}
          onPhotoCaptured={(photo) => {
            setScannedPhoto(photo);
            setPage('scannedFaceFullScreen');
          }}
        />
      )}
      {page === 'scannedFaceFullScreen' && (
        <ScannedFaceFullScreen
          scannedPhoto={scannedPhoto}
          onKeepPhotoClick={handlePhotoConfirm}
          onTryAgainClick={() => {
            setScannedPhoto(null);
            setPage('scanFace');
          }}
        />
      )}
      {page === 'selectPhoto' && (
        <SelectPhoto
          onBackClick={() => setPage('gallery')}
          onPhotoSelected={(photo) => {
            setSelectedPhoto(photo);
            setPhotoBackPage('selectPhoto');
            setPage('chosenPhoto');
          }}
        />
      )}
      {page === 'chosenPhoto' && (
        <ChosenPhoto
          selectedPhoto={selectedPhoto}
          onBackClick={() => setPage(photoBackPage)}
          onProceedClick={handlePhotoConfirm}
        />
      )}
      {page === 'prepareAnalysis' && (
        <PrepareAnalysis onComplete={() => setPage('aiAnalysis')} />
      )}
      {page === 'aiAnalysis' && (
        <AIAnalysis
          onBackClick={() => setPage('gallery')}
          onDemographicsClick={() => setPage('demographics')}
        />
      )}
      {page === 'demographics' && (
        <Demographics
          confirmedPhoto={confirmedPhoto}
          onBackClick={() => setPage('aiAnalysis')}
          onConfirmClick={() => setPage('aiAnalysis')}
        />
      )}
    </div>
  );
}

export default App;
