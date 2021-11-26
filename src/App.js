import { Routes, Route } from "react-router-dom";
import Home from "./home";
import ETH from "./ETH";
import LTC from "./LTC";
import Odm from "./Odm";
import Contato from "./contato";
import Gerenciador from "./gerenciador";
import SoliPendentes from "./soliPendentes";
import BtcForm from "./CG/BtcForm";
import BtcList from "./CG/BtcList";
import BtcDelete from "./CG/BtcDelete";
import BtcEdit from "./CG/BtcEdit";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eth" element={<ETH />} />
        <Route path="/odm" element={<Odm />} />
        <Route path="/ltc" element={<LTC />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/gerenciador" element={<Gerenciador />} />
        <Route path="/pendentes" element={<SoliPendentes />} />
        <Route path="/ordemcompra/new" element={<BtcForm />} />
        <Route path="/ordemcompra/list" element={<BtcList />} />
        <Route path="/ordemcompra/delete/:id" element={<BtcDelete />} />      
        <Route path="/ordemcompra/edit/:id" element={<BtcEdit />} />
      </Routes>
    </div>
  );
}

export default App;