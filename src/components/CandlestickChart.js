
import React, { useEffect, useRef, useState } from 'react';
import { Chart, CategoryScale, LinearScale, TimeScale } from 'chart.js';
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';
import 'chartjs-adapter-date-fns';
import 'chartjs-plugin-zoom'; 
import './CandlestickChart.css';

Chart.register(CategoryScale, LinearScale, TimeScale, CandlestickController, CandlestickElement);

const CandlestickChart = ({ symbol, interval }) => {
  const chartRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const connectWebSocket = () => {
      const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@kline_${interval}`);

      ws.onopen = () => {
        console.log('WebSocket connection opened');
      };

      ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (message && message.k) {
          const candle = {
            time: message.k.t,
            open: parseFloat(message.k.o),
            high: parseFloat(message.k.h),
            low: parseFloat(message.k.l),
            close: parseFloat(message.k.c),
          };
          console.log('Candle received:', candle);
          setData((prevData) => [...prevData, candle]);
        }
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        setTimeout(connectWebSocket, 1000);
      };

      ws.onclose = () => {
        console.log('WebSocket connection closed');
        setTimeout(connectWebSocket, 1000);
      };

      return () => ws.close();
    };

    connectWebSocket();
  }, [symbol, interval]);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById('myChart').getContext('2d');

    chartRef.current = new Chart(ctx, {
      type: 'candlestick',
      data: {
        datasets: [{
          label: `${symbol.toUpperCase()} Candlestick`,
          data: data.map(candle => ({
            x: candle.time,
            o: candle.open,
            h: candle.high,
            l: candle.low,
            c: candle.close,
          })),
        }],
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: { unit: 'minute', tooltipFormat: 'll HH:mm' },
            title: { display: true, text: 'Time' },
          },
          y: { title: { display: true, text: 'Price' } },
        },
        plugins: {
          zoom: {
            pan: {
              enabled: true,
              mode: 'x', 
            },
            zoom: {
              enabled: true,
              mode: 'x',
              wheel: {
                enabled: true, 
              },
            },
          },
        },
      },
    });
  }, [data, symbol]);

  return (
    <div className="chart-container">
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default CandlestickChart;