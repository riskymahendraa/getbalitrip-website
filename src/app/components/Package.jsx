import React from "react";
import Image from "next/image";
import packages from "@/app/data/packages.json";
import cities from "@/app/data/cities.json";
import { FaUserGroup } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import ContentLayout from "../Layouts/ContentLayout";

const Package = () => {
  const packagesWithCity = packages.map((pkg) => {
    const city = cities.find((c) => c.id === pkg.city_id);
    return { ...pkg, city }; // tambahkan data city ke package
  });
  return (
    <div className="bg-gray-100">
      <ContentLayout>
        <div className="py-5">
          <h3 className="text-2xl leading-relaxed tracking-wide mb-3 font-semibold text-lime-500 relative inline-block after:content-[''] after:block after:absolute after:top-1/2 after:left-full after:ml-2 after:w-8 after:h-[2px] after:bg-lime-500">
            Many Tourist Visit
          </h3>
          <h2 className="text-xl md:text-2xl mb-4">Popular Packages</h2>
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-4 md:gap-8 md:overflow-visible">
            {packagesWithCity.map((pkg) => (
              <div
                key={pkg.id}
                className="card bg-white w-80 flex-shrink-0 shadow-sm hover:shadow-lg transition-all duration-300 snap-start md:w-full hover:scale-105"
              >
                <figure>
                  <Image
                    src={pkg.images[0]}
                    alt={pkg.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </figure>

                <div className="card-body">
                  <div className="flex items-center justify-between text-sm mb-2 text-gray-400">
                    {/* Kiri: rating */}
                    <div className="flex items-center gap-x-1">
                      <span className="text-yellow-500 text-base">★</span>
                      <span>
                        {pkg.rating}{" "}
                        <span className="text-gray-400">(100+ reviews)</span>
                      </span>
                    </div>

                    {/* Kanan: city name */}
                    <div className="text-gray-400 font-medium">
                      {pkg.city?.name},{" "}
                      <span className="text-gray-400">Bali</span>
                    </div>
                  </div>

                  <h2 className="card-title text-gray-800">{pkg.name}</h2>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {pkg.description}
                  </p>

                  <p className="text-lime-500 font-semibold text-2xl mt-2">
                    IDR {pkg.price.toLocaleString("id-ID")}{" "}
                    <span className="text-sm text-gray-500">/car</span>
                  </p>
                  <div className="bg-lime-500 my-2 text-white rounded-lg p-2 ">
                    <div className="flex space-x-5 justify-center text-lime-800 items-center">
                      <div className="flex items-center justify-center space-x-1">
                        <FaUserGroup /> <span>Max 5</span>
                      </div>
                      <div className="flex items-center justify-center space-x-1">
                        <FaClock /> <span>8 Hours</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary btn-sm">
                      View Details
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

export default Package;
