import Header from "./components/layout/Header";
import Hero from "./components/home/Hero";
import Featured from "./components/home/Featured";
import About from "./components/home/About";
import WhyChooseUs from "./components/home/WhyChooseUs";
import SignatureDishes from "./components/home/SignatureDishes";
import TodaysSpecials from "./components/home/TodaysSpecials";
import Testimonials from "./components/home/Testimonials";
import Gallery from "./components/home/Gallery";
import Reservation from "./components/home/Reservation";
import Contact from "./components/home/Contact";
import Footer from "./components/home/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Featured />
      <About />
      <WhyChooseUs />
      <SignatureDishes />
      <TodaysSpecials />
      <Testimonials />
      <Gallery />
      <Reservation />
      <Contact />
      <Footer />

    </>
  );
}

export default App;