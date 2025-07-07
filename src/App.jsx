import About from "./components/About";
import Contact from "./components/Contact";
import Dishes from "./components/Dishes";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import Review from "./components/Review";

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <Navbar />
      <Hero />
      <Dishes />
      <About />
      <Mission />
      <Expertise />
      <Review />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
