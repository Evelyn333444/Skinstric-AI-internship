import React, { useState } from 'react';
import './App.css';
import Home from './pages/home/home';
import Introduce from './pages/introduction/introduce';
import Origine from './pages/origine/origine';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="App">
      {page === 'home' && <Home onTakeTestClick={() => setPage('intro')} />}
      {page === 'intro' && <Introduce onBackClick={() => setPage('home')} onSearchSubmit={() => setPage('origine')} />}
      {page === 'origine' && <Origine />}
    </div>
  );
}

export default App;
