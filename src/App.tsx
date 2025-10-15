import "./App.css";
import Automation from "./sections/Automation";
import BeforeAfter from "./sections/BeforeAfter";
import Concept from "./sections/Concept";
import Differentiation from "./sections/Differentiation";
import Faq from "./sections/Faq";
import Figures from "./sections/Figures";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import TryItNow from "./sections/TryItNow";

function App() {
  return (
    <div className="h-screen overflow-auto">
      <Hero />
      <Concept />
      <Automation />
      <Services />
      <Differentiation />
      <Figures />
      <BeforeAfter />
      <Faq />
      <TryItNow />
      <Footer />
    </div>
  );
}

export default App;
