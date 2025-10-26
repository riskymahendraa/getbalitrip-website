import About from "./components/About";
import Cities from "./components/Cities";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Package from "./components/Package";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Cities />
      <Offer />
      <Package />
      <Testimonials />
    </div>
  );
}
