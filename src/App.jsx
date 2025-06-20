import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Team from "./sections/Team";
import TextSection from "./sections/TextSection";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <div className="overflow-hidden">
      <CustomCursor />
      <Hero />
      <TextSection />
      <Services />
      <Projects />
      <Team />
      <CTA />
      <Footer />
    </div>
  )
}

export default App;
