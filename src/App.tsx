import "./App.css";
import Automation from "./sections/Automation";
import BeforeAfter from "./sections/BeforeAfter";
import Concept from "./sections/Concept";
import Differentiation from "./sections/Differentiation";
import Faq from "./sections/Faq";
import Figures from "./sections/Figures";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Header from "./sections/Header";
import Services from "./sections/Services";
import TryItNow from "./sections/TryItNow";
import Pricing from "./sections/Pricing";
import { useLocation, useNavigate } from "react-router-dom";
import { useAmplitude } from "./hooks/useAmplitude";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useAmplitude();

  useEffect(() => {
    // Redirect to home if route is not / or /pricing
    if (pathname !== "/" && pathname !== "/pricing") {
      navigate("/", { replace: true });
    }
  }, [pathname, navigate]);

  return (
    <div className="h-screen">
      <Header />
      {pathname === "/pricing" ? <Pricing /> : <Hero />}
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
