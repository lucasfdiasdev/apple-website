import Hero from "./components/hero";
import Model from "./components/model";
import Navbar from "./components/navbar";
import Highlights from "./components/highlights";
import Features from "./components/features";
import HowItWorks from "./components/how-it-works";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
    </main>
  );
}

export default App;
