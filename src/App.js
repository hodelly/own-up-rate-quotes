import React from 'react';
import logo from './logo.svg';
import RateQuoteInput from './components/RateQuoteInput.js';
import Table from './components/Table.js';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <RateQuoteInput />
        <Table />

      </header>
    </div>
  );
}

export default App;
