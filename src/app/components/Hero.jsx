import React from "react";
const Hero = () => {
  return (
    <div
      // Hapus pt-[80px] di sini. Padding untuk Navbar sudah dihandle di Home.jsx
      className="relative h-[80vh] flex items-center justify-center bg-center bg-cover"
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
          <span className="font-bold text-lime-500">GetBaliTrip</span>.
        </p>
        <a
          href="#packages"
          className="btn bg-lime-500 hover:bg-lime-600 hover:scale-105 transition ease-in-out rounded-xl"
        >
          Explore Packages
        </a>
      </div>
    </div>
  );
};

export default Hero;
