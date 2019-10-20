import React from 'react';
import RateQuoteInput from './components/RateQuoteInput.js';
import RateQuoteTable from './components/Table.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="./ownUpLogo.png" className="App-logo" alt="logo" />
      Own Up.
      </header>
      <RateQuoteInput />


      <RateQuoteTable />
    </div>
  );
}

export default App;
