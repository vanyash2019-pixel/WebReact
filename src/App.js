import React from 'react';
import './App.css';
import Header from './components/Header';

const ORG_NAME = 'ЕГДС';

function App() {
  return (
    <div className="App">
      <Header orgName={ORG_NAME} />
    </div>
  );
}

export default App;