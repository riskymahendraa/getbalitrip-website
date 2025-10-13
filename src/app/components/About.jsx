import React from "react";

const About = () => {
  return (
    <div className="my-10 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
        {/* Text Section */}
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-bold mb-4">
            Experience <span className="text-green-700">The New Adventure</span>
          </h2>
          <p className="leading-relaxed text-base md:text-base text-gray-700">
            At <strong>GetBaliTrip</strong>, we redefine the way you travel.
            With carefully curated experiences, seamless service, and local
            expertise, every journey becomes effortless and extraordinary.
            Experience adventure with comfort, and discover the world with
            confidence.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="lg:col-span-3 h-64 md:h-[50vh] rounded-md bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/image-1.jpg')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default About;
