import "./App.css";
import Banner from "./components/Banner";
import Download from "./components/Download";
import Features from "./components/Features";
import Footer from "./components/Footer";
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
      <Features />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
