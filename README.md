# Binance Market Data WebSocket - Candlestick Chart Visualization

## Overview

This project is a real-time candlestick chart visualization for cryptocurrency data using React and WebSockets. The application connects to the Binance WebSocket API to retrieve live market data for selected cryptocurrency pairs and displays it using a candlestick chart. The chart updates smoothly without flickering, and users can switch between different cryptocurrencies and time intervals for candlestick data.

### Features

- Real-time candlestick chart using the Binance WebSocket API.
- Support for multiple cryptocurrency pairs: `ETH/USDT`, `BNB/USDT`, `DOT/USDT`.
- Toggle between 1-minute, 3-minute, and 5-minute intervals.
- Dark grey and black theme for a premium look.
- Smooth chart updates without flickering.
- Data persistence when switching between cryptocurrencies.
- Responsive design for optimal viewing on different devices.

### Technologies Used

- **React**: Front-end library for building the user interface.
- **Binance WebSocket API**: For retrieving real-time market data.
- **Chart.js**: For rendering the candlestick chart.
- **chartjs-chart-financial**: Plugin for financial charts in Chart.js.
- **Local Storage**: To store and persist candlestick data for each cryptocurrency pair.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/binance-market-data.git
    cd binance-market-data
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Open the application in your browser:

    ```
    http://localhost:3000
    ```

## Project Structure

```bash
binance-market-data/
├── public/
├── src/
│   ├── components/
│   │   ├── CandlestickChart.js
    |   ├── CandlestickChart.css # Candlestick chart implementation
│   ├── App.js                    # Main app component
│   ├── index.js                  # Entry point for the React app
│   ├── App.css                   # Styles for the app
├── package.json                  # Project dependencies and scripts
├── README.md                     # Project documentation

Usage
Select Cryptocurrency Pair: Use the dropdown to toggle between ETH/USDT, BNB/USDT, and DOT/USDT.
Change Time Interval: Choose between 1-minute, 3-minute, or 5-minute intervals for the candlestick data.
View Live Data: The candlestick chart updates in real-time, displaying the selected cryptocurrency's market data.

Deployment
To create a production build for deployment:
npm run build

Issues and Troubleshooting
If you encounter issues such as WebSocket connection problems or chart rendering issues, please check the browser console for more details. Make sure that:

You have an active internet connection.
The WebSocket URL is correct and functional.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
React
Binance WebSocket API
Chart.js
chartjs-chart-financial
