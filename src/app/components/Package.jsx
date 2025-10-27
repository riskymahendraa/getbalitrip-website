import React from "react";
import Image from "next/image";
import packages from "@/app/data/packages.json";
import cities from "@/app/data/cities.json";
import { FaWhatsapp } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import ContentLayout from "../Layouts/ContentLayout";

const Package = () => {
  const packagesWithCity = packages
    .map((pkg) => {
      const city = cities.find((c) => c.id === pkg.city_id);
      return { ...pkg, city };
    })
    .slice(0, 3);
  return (
    <div className="bg-gray-100">
      <ContentLayout className="mt-10" id="packages">
        <div className="py-5">
          <h3 className="text-2xl leading-relaxed tracking-wide mb-3 font-semibold text-lime-500 relative inline-block after:content-[''] after:block after:absolute after:top-1/2 after:left-full after:ml-2 after:w-8 after:h-[2px] after:bg-lime-500">
            Many Tourist Visit
          </h3>
          <div className="flex justify-between items-center mb-5">
            <div>
              <h2 className="text-xl md:text-2xl">Popular Packages</h2>
            </div>
            <div>
              <button className="tracking-wide text-xs md:text-base text-gray-400 hover:text-gray-800 hover:scale-105 transition ease-in-out duration-300">
                View All <FaArrowRight className="inline-block ml-1" />
              </button>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible scrollbar-hide">
            {packagesWithCity.map((pkg) => (
              <div
                key={pkg.id}
                className="group card bg-white w-80 flex-shrink-0 shadow-md hover:shadow-2xl transition-all duration-300 snap-start md:w-full hover:-translate-y-2 rounded-2xl overflow-hidden border-2 border-transparent hover:border-lime-400"
              >
                <figure className="relative overflow-hidden">
                  <Image
                    src={pkg.images[0]}
                    alt={pkg.name}
                    width={400}
                    height={300}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Rating badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <span className="text-amber-400 text-base">★</span>
                    <span className="font-bold text-gray-800 text-sm">
                      {pkg.rating}
                    </span>
                  </div>
                </figure>

                <div className="card-body p-6">
                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-lime-600 mb-2">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-semibold">
                      {pkg.city?.name}, Bali
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-lime-700 transition-colors">
                    {pkg.name}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed mb-4">
                    {pkg.description}
                  </p>

                  {/* Info Pills */}
                  <div className="flex gap-2 mb-4">
                    <div className="bg-lime-100 text-lime-700 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                      <FaUserGroup />
                      <span>Max 5</span>
                    </div>
                    <div className="bg-lime-100 text-lime-700 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                      <FaClock />
                      <span>8 Hours</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-100 my-4"></div>

                  {/* Price & Actions */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl md:text-2xl font-bold text-lime-600">
                        IDR {pkg.price.toLocaleString("id-ID")}{" "}
                        <span className="text-sm font-normal text-gray-400">
                          /car
                        </span>
                      </p>
                    </div>
                    <button className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-5 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2">
                      <span>Book</span>
                      <FaWhatsapp className="text-xl" />
                    </button>
                  </div>

                  {/* Details Link */}
                  <button className="w-full mt-3 text-lime-600 hover:text-lime-700 font-semibold text-sm py-2 hover:bg-lime-50 rounded-lg transition-all duration-300">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-stretch w-full px-4 md:px-0 md:w-11/12 lg:w-3/4 xl:w-2/3 mx-auto my-4 rounded-l-2xl md:my-8 overflow-hidden md:shadow-lg">
            {/* Gambar */}
            <div className="hidden md:block relative w-full md:w-1/2 h-64 sm:h-80 md:h-auto md:min-h-[450px]">
              <Image
                src="/images/tourist.png"
                alt="Tourist"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Box Text */}
            <div className="bg-gradient-to-br from-lime-800 via-lime-700 to-lime-600 text-white flex flex-col justify-center rounded-2xl md:rounded-none md:rounded-l-4xl p-6 sm:p-8 md:p-10 lg:p-12 md:w-1/2">
              <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 leading-tight">
                Customize Tour to Match Your Travel Style
              </h2>
              <p className="text-sm sm:text-base md:text-base leading-relaxed opacity-90 mb-5 md:mb-6">
                Create a journey that reflects your interests, pace, and
                preferences. With our flexible tour options, you can mix and
                match destinations, activities, and experiences to design the
                perfect adventure just for you.
              </p>
              <button className="border-2 flex items-center gap-x-2 border-white px-5 py-2.5 rounded-lg hover:bg-white hover:text-lime-700 active:scale-95 transition-all duration-300 font-semibold w-fit text-sm md:text-base shadow-lg hover:shadow-xl">
                Book Now{" "}
                <span className="text-xl">
                  {" "}
                  <FaWhatsapp />
                </span>
              </button>
            </div>
          </div>
        </div>
      </ContentLayout>
    </div>
  );
};

export default Package;
