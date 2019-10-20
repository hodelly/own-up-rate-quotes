import React from 'react';
import logo from './logo.svg';
import RateQuoteInput from './components/RateQuoteInput.js';
import RateQuoteTable from './components/Table.js';
import './App.css';

function App() {
  return (
    <div className="App">

      <RateQuoteInput />


      <RateQuoteTable />
    </div>
  );
}

export default App;
