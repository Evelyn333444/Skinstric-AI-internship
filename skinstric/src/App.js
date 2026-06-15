import React, { useState } from 'react';
import './App.css';
import Home from './pages/home/home';
import Introduce from './pages/introduction/introduce';
import Origine from './pages/origine/origine';
import Gallery from './pages/gallery/gallery';
import AIAnalysis from './pages/aiAnalysis/aiAnalysis';
import Demographics from './pages/demographics/demographics';
import SelectPhoto from './components/selectPhoto/selectPhoto';
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
        />
      )}
      {page === 'selectPhoto' && (
        <SelectPhoto onBackClick={() => setPage('gallery')} />
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
