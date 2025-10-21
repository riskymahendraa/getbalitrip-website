import React from "react";
import ContentLayout from "../Layouts/ContentLayout";
import Image from "next/image";
import cities from "@/app/data/cities.json";

const Cities = () => {
  return (
    <div>
      <ContentLayout>
        <div className="space-y-6">
          {/* Heading & Intro */}
          <div className="w-full">
            <h3 className="text-2xl sm:text-xl md:text-2xl leading-relaxed tracking-wide mb-2 font-semibold text-lime-500 relative inline-block after:content-[''] after:block after:absolute after:top-1/2 after:left-full after:ml-2 after:w-8 after:h-[2px] after:bg-lime-500">
              Tour Destinations
            </h3>
            <p className="leading-relaxed text-sm sm:text-base text-gray-700">
              At <strong>GetBaliTrip</strong>, we bring you closer to the true
              beauty of Bali through personalized and unforgettable tour
              services. Whether you’re dreaming of relaxing on white-sand
              beaches, exploring majestic temples, chasing hidden waterfalls, or
              witnessing Bali’s world-famous sunsets, our curated destinations
              offer something for everyone. <br />
              <br />
              With our local guides, comfortable transport, and seamless
              itineraries, every journey becomes easy and inspiring. Experience
              Bali’s magic — from Ubud’s tranquil rice terraces to the vibrant
              nightlife of Seminyak — and let us turn your vacation into a story
              worth remembering.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-5">
            {cities.map((city) => (
              <div
                key={city.id}
                className="card image-full w-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group relative"
              >
                <figure className="h-56 sm:h-64 overflow-hidden">
                  <Image
                    src={city.image}
                    alt={city.name}
                    width={400}
                    height={250}
                    className="object-cover w-full h-full"
                  />
                </figure>

                <div className="card-body justify-center">
                  <h2 className="card-title text-2xl leading-relaxed tracking-widest justify-center items-center text-white">
                    {city.name}
                  </h2>

                  {/* Rating */}
                  <div className="absolute bottom-2 left-2 flex items-center space-x-1 bg-black/25 px-2 py-1 rounded opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-yellow-400">★</span>
                    <div className="text-white text-sm ml-1">
                      {city.rating}{" "}
                      <span className="text-yellow-500">(100+ Reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentLayout>
    </div>
  );
};

export default Cities;
