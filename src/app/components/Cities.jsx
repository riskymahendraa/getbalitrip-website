import React from "react";
import ContentLayout from "../Layouts/ContentLayout";

const Cities = () => {
  return (
    <div>
      <ContentLayout>
        <div className="space-y-6">
          {/* Heading & Intro */}
          <div className="w-full md:w-3/5">
            <h3 className="text-2xl sm:text-xl md:text-2xl leading-relaxed tracking-wide mb-2 font-semibold text-yellow-500 relative inline-block after:content-[''] after:block after:absolute after:top-1/2 after:left-full after:ml-2 after:w-8 after:h-[2px] after:bg-yellow-500">
              Cities We Cover
            </h3>
            <p className="leading-relaxed text-sm sm:text-base text-gray-700">
              At <strong>GetBaliTrip</strong>, we redefine the way you travel.
              With carefully curated experiences, seamless service, and local
              expertise, every journey becomes effortless and extraordinary.
              Experience adventure with comfort, and discover the world with
              confidence.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="card bg-base-100 image-full w-full shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Destination"
                      className="object-cover w-full h-56 sm:h-64"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Beautiful City {i + 1}</h2>
                    <p>
                      Explore one of our stunning destinations and experience
                      unforgettable adventures.
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary btn-sm sm:btn-md">
                        Discover
                      </button>
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
