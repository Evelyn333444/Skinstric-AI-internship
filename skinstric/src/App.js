import React, { useState } from 'react';
import './App.css';
import Home from './pages/home/home';
import Introduce from './pages/introduction/introduce';
import Origine from './pages/origine/origine';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import YourTargetComponent from './YourTargetComponent';


function App() {
  const [page, setPage] = useState('home');

  <BrowserRouter>
  <Routes>
    <Route path="/your-target-route" element={<YourTargetComponent />} />
  </Routes>
</BrowserRouter>

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
