//import { Navbar } from "react-bootstrap";
import Home from "./CJ/HomeEventExpress";
import NavBar from "./CJ/NavbarEventExpess";
import { SlideData } from "./CJ/SlideData";
import Slider from "./CJ/SlideEventExpress";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider slides={SlideData} />;
      <Home/>
    
    
    </div>
  );
}

export default App;