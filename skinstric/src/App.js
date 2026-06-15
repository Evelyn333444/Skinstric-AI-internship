import React, { useState } from 'react';
import './App.css';
import Home from './pages/home/home';
import Introduce from './pages/introduction/introduce';
import Origine from './pages/origine/origine';
import Gallery from './pages/gallery/gallery';
import AIAnalysis from './pages/aiAnalysis/aiAnalysis';
import Demographics from './pages/demographics/demographics';
import SelectPhoto from './components/selectPhoto/selectPhoto';
import ChosenPhoto from './pages/chosenPhoto/chosenPhoto';
import ScanFace from './components/scanFace/scanFace';
import {
  SKINSTRIC_USER_NAME_KEY,
  SKINSTRIC_USER_LOCATION_KEY,
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
  const [photoBackPage, setPhotoBackPage] = useState('selectPhoto');

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
            setSelectedPhoto(photo);
            setPhotoBackPage('scanFace');
            setPage('chosenPhoto');
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
        />
      )}
      {page === 'aiAnalysis' && (
        <AIAnalysis
          onBackClick={() => setPage('gallery')}
          onSearchSubmit={() => setPage('demographics')}
        />
      )}
      {page === 'demographics' && (
        <Demographics
          userName={userName}
          userLocation={userLocation}
          onBackClick={() => setPage('aiAnalysis')}
        />
      )}
    </div>
  );
}

export default App;
