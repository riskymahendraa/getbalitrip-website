import React from "react";
import { FaCarSide, FaUsers, FaCalendarCheck } from "react-icons/fa";
import ContentLayout from "../Layouts/ContentLayout";

const offers = [
  {
    icon: <FaCarSide className="text-4xl text-lime-500 mx-auto" />,
    title: "Comfortable Transport",
    desc: "We provide comfortable and safe transportation options for your travel needs.",
  },
  {
    icon: <FaUsers className="text-4xl text-lime-500 mx-auto" />,
    title: "Best Drivers",
    desc: "We have professional drivers who make your trip enjoyable and informative.",
  },
  {
    icon: <FaCalendarCheck className="text-4xl text-lime-500 mx-auto" />,
    title: "Customize Itinerary",
    desc: "We offer customizable itineraries to suit your preferences and schedule.",
  },
];

const Offer = () => {
  return (
    <div className="bg-white">
      <ContentLayout>
        {/* Header */}
        <h3 className="text-2xl leading-relaxed tracking-wide mb-3 font-semibold text-lime-500 relative inline-block after:content-[''] after:block after:absolute after:top-1/2 after:left-full after:ml-2 after:w-8 after:h-[2px] after:bg-lime-500">
          What We Give
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Left Side (Title) */}
          <div className="w-full md:col-span-1">
            <h2 className="text-2xl mb-2">
              Best Offer For <br /> Your Trip
            </h2>
            <p className="mt-2 text-gray-600 text-base leading-relaxed">
              We provide exclusive travel packages, trusted tour guides, and
              flexible itenarary options — everything you need for a perfect
              holiday experience.
            </p>
          </div>

          {/* Offers */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
              >
                <div className="mb-4">{offer.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  {offer.title}
                </h3>
                <p className="text-sm text-gray-500 text-center leading-relaxed">
                  {offer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContentLayout>
    </div>
  );
};

export default Offer;
