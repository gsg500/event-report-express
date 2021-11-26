import { Routes, Route } from "react-router-dom";
import Home from "./home";
import BTC from "./BTC";
import ETH from "./ETH";
import LTC from "./LTC";
import Contato from "./contato";
import Gerenciador from "./gerenciador";
import SoliPendentes from "./soliPendentes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/btc" element={<BTC />} />
        <Route path="/eth" element={<ETH />} />
        <Route path="/ltc" element={<LTC />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/contato" element={<Gerenciador />} />
        <Route path="/contato" element={<SoliPendentes />} />
      </Routes>
    </div>
  );
}

export default App;