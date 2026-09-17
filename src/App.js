import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';

const ORG_NAME = 'ЕГДС';

function App() {
  return (
    <div className="App">
      <Header orgName={ORG_NAME} />
      <main className="main">
        <HeroSlider />
      </main>
    </div>
  );
}

export default App;