import React from 'react';
import NewsChecker from './components/NewsChecker';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <img
        src="/fake-vs-real.png"
        alt="Fake vs Real Logo"
        style={{ width: '150px', marginBottom: '10px' }}
      />
      <h1>📰 Fake News Detector</h1>
      <NewsChecker />
    </div>
  );
}

export default App;
