import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div
      className="relative h-[80vh] flex items-center justify-center bg-center bg-cover pt-[80px]"
      style={{
        backgroundImage: "url('/images/heroo.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center text-white max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover the Beauty of Bali
        </h1>
        <p className="text-lg md:text-xl font-light mb-6">
          Your unforgettable journey starts here — explore paradise with{" "}
          <span className="font-semibold text-primary">GetBaliTrip</span>.
        </p>
        <a href="#packages" className="btn btn-primary">
          Explore Packages
        </a>
      </div>
    </div>
  );
};

export default Hero;
