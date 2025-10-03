import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Testimonials/>
      <Footer/>
    </>
  );
}