import React, { useState } from 'react';
import './App.css';
import Home from './pages/home/home';
import Introduce from './pages/introduction/introduce';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="App">
      {page === 'home' && <Home onTakeTestClick={() => setPage('intro')} />}
      {page === 'intro' && <Introduce onBackClick={() => setPage('home')} />}
    </div>
  );
}

export default App;
