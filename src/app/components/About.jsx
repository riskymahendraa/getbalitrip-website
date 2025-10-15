import ContentLayout from "../Layouts/ContentLayout";
import React from "react";

const About = () => {
  return (
    <ContentLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
        {/* Text Section */}
        <div className="lg:col-span-1">
          <h3 className="text-2xl leading-relaxed tracking-wide my-1 font-semibold text-yellow-500 relative inline-block after:content-[''] after:block after:absolute after:top-1/2 after:left-full after:ml-2 after:w-8 after:h-[2px] after:bg-yellow-500">
            About Us
          </h3>
          <h2 className="text-3xl font-bold mb-4">
            Experience The New Adventure
          </h2>
          <p className="leading-relaxed text-sm md:text-base text-gray-700">
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
    </ContentLayout>
  );
};

export default About;
