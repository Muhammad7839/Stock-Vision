import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import PredictionCard from "./components/PredictionCard";
import SentimentChart from "./components/SentimentChart";

import logo from './logo.png'; // Make sure logo.png is in your src/ folder

function App() {
  const [asset, setAsset] = useState("");

  return (
    <div className="App">
      {/* ✅ Add your logo here */}
      <img src={logo} alt="Stock Vision Logo" className="logo" />

      <h1>Stock Vision</h1>
      <p>AI-powered predictions with a modern look ✨</p>

      {/* Asset Dropdown */}
      <label>Select an asset:</label>
      <select value={asset} onChange={(e) => setAsset(e.target.value)}>
        <option value="">-- Select --</option>
        <option value="AAPL">Apple (AAPL)</option>
        <option value="BTC">Bitcoin (BTC)</option>
        <option value="TSLA">Tesla (TSLA)</option>
      </select>

      {/* Input Form Component */}
      <InputForm />

      {/* Prediction Card */}
      {asset && <PredictionCard asset={asset} prediction={`The predicted price for ${asset} is $420`} />}

      {/* Sentiment Chart */}
      {asset && <SentimentChart />}
    </div>
  );
}

export default App;
