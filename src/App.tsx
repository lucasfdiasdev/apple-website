import Hero from "./components/hero";
import Model from "./components/model";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Features from "./components/features";
import Highlights from "./components/highlights";
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
      <Footer />
    </main>
  );
}

export default App;
