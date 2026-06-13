import React, { useState } from 'react';
import './App.css';
import Home from './pages/home/home';
import Introduce from './pages/introduction/introduce';
import Origine from './pages/origine/origine';
import Gallery from './pages/gallery/gallery';
import AIAnalysis from './pages/aiAnalysis/aiAnalysis';
import Demographics from './pages/demographics/demographics';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="App">
      {page === 'home' && <Home onTakeTestClick={() => setPage('intro')} />}
      {page === 'intro' && <Introduce onBackClick={() => setPage('home')} onSearchSubmit={() => setPage('origine')} />}
      {page === 'origine' && <Origine onBackClick={() => setPage('intro')} />}
      {page === 'gallery' && <Gallery onBackClick={() => setPage('origine')} />}
      {page === 'aiAnalysis' && <AIAnalysis onBackClick={() => setPage('gallery')} />}
      {page === 'demographics' && <Demographics onBackClick={() => setPage('aiAnalysis')} />}
    </div>
  );
}

export default App;
