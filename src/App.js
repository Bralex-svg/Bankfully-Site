import "./App.css";
import Banner from "./components/Banner";
import HeroSec from "./components/HeroSec";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <HeroSec />
    </div>
  );
}

export default App;
