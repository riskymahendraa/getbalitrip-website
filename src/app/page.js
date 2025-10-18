import About from "./components/About";
import Cities from "./components/Cities";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Cities />
      <Offer />
    </div>
  );
}
