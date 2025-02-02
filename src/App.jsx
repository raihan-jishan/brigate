import Discover from "./components/Discover";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import OurService from "./components/OurService";
import Pricing from "./components/Pricing";
import Projects from "./components/Projects";
import Review from "./components/Review";
import Footer from "./components/shared/Footer";
import Nav from "./components/shared/Nav";
import SteelFraming from "./components/SteelFraming";
function App() {
  return (
    <div className="bg-orange-100">
      <Nav />
      <Hero />
      <Featured /> 
      <OurService /> 
      <Discover />
      <Projects />
      <Pricing />
      <Review />
      <SteelFraming /> 
      <Footer />
    </div>
  );
}
export default App;
