import "./App.css";
import BeforeAfter from "./sections/BeforeAfter";
import Differentiation from "./sections/Differentiation";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";
import Services from "./sections/Services";
import TryItNow from "./sections/TryItNow";

function App() {
  return (
    <div className="min-h-screen overflow-auto">
      <Services />
      <Differentiation />
      <BeforeAfter />
      <Faq />
      <TryItNow />
      <Footer />
    </div>
  );
}

export default App;
