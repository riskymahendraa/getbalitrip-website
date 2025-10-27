import About from "./components/About";
import Blog from "./components/Blog";
import Cities from "./components/Cities";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Package from "./components/Package";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Cities />
      <Offer />
      <Package />
      <Testimonial />
      <Blog />
    </div>
  );
}
