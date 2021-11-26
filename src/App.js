import { Routes, Route } from "react-router-dom";
import Home from "./home";
import BTC from "./BTC";
import ETH from "./ETH";
import LTC from "./LTC";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/btc" element={<BTC />} />
        <Route path="/eth" element={<ETH />} />
        <Route path="/ltc" element={<LTC />} />
      </Routes>
    </div>
  );
}

export default App;