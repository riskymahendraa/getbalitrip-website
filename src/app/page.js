import About from "./components/About";
import Cities from "./components/Cities";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Cities />
    </div>
  );
}
