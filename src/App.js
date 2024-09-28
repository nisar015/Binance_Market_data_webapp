import React, { useState } from 'react';
import CandlestickChart from './components/CandlestickChart.js';
import  './App.css';

const App = () => {
 
  const [selectedCoin, setSelectedCoin] = useState('ethusdt');
  const [selectedInterval, setSelectedInterval] = useState('1m');

 
  const coins = ['ethusdt', 'bnbusdt', 'dotusdt'];
  const intervals = ['1m', '3m', '5m'];

  const handleCoinChange = (event) => {
    setSelectedCoin(event.target.value);
  };

  const handleIntervalChange = (event) => {
    setSelectedInterval(event.target.value);
  };

  return (
    <div>
      <h1>Binance Market Data WebSocket</h1>

      <div>
        <label>Choose Cryptocurrency: </label>
        <select value={selectedCoin} onChange={handleCoinChange}>
          {coins.map((coin) => (
            <option key={coin} value={coin}>
              {coin.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Choose Interval: </label>
        <select value={selectedInterval} onChange={handleIntervalChange}>
          {intervals.map((interval) => (
            <option key={interval} value={interval}>
              {interval}
            </option>
          ))}
        </select>
      </div>

      <CandlestickChart symbol={selectedCoin} interval={selectedInterval} />
    </div>
  );
};

export default App;
