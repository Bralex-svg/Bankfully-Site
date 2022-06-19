import "./App.css";
import Banner from "./components/Banner";
import HeroSec from "./components/HeroSec";
import HowTo from "./components/HowTo";
import { Navbar } from "./components/Navbar";
import Partners from "./components/Partners";

function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <HeroSec />
      <Partners />
      <HowTo />
    </div>
  );
}

export default App;
