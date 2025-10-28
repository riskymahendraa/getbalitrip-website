import React from "react";
import testimonials from "@/app/data/testimonials.json";
import { FaQuoteLeft } from "react-icons/fa";
import ContentLayout from "../Layouts/ContentLayout";

const Testimonial = () => {
  const GoogleIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="35"
      height="35"
    >
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.54h6.53a5.59 5.59 0 01-2.42 3.67v3.05h3.89c2.27-2.09 3.49-5.18 3.49-9z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.08 7.94-2.91l-3.89-3.05c-1.08.72-2.46 1.13-4.05 1.13-3.11 0-5.75-2.1-6.69-4.93H1.28v3.09A12.01 12.01 0 0012 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.31 14.24a7.17 7.17 0 010-4.48V6.67H1.28a12 12 0 000 10.66l4.03-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.36.61 4.61 1.81l3.42-3.42A11.93 11.93 0 0012 0 12 12 0 001.28 6.67l4.03 3.09C6.25 6.85 8.89 4.75 12 4.75z"
      />
    </svg>
  );

  return (
    <div
      className="relative h-[70vh] md:min-h-[100vh] bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/image-2.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-lime-900/80"></div>

      {/* Content */}
      <ContentLayout className="absolute inset-0">
        {/* Section title */}
        <div className="flex justify-center items-start pt-8 z-10">
          <div className="bg-yellow-500 px-6 py-1 rounded-3xl">
            <h1 className="text-center text-gray-800 tracking-widest text-base">
              Testimonials
            </h1>
          </div>
        </div>

        <div className="flex my-5 mx-auto z-10 items-center justify-center">
          <h2 className="text-2xl text-center leading-snug md:text-4xl font-semibold text-white">
            What Our Happy <br /> Clients Say
          </h2>
        </div>

        {/* Testimonial cards - Scroll di mobile, wrap di desktop */}
        <div
          className="
            flex gap-6 my-10 mx-auto z-10 text-white
            overflow-x-auto md:overflow-visible
            md:flex-wrap md:justify-center
            px-5 md:px-0
            pt-10
            pb-10 md:pb-0
            scrollbar-hide
          "
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                relative flex-shrink-0 md:flex-shrink
                card bg-base-100 w-64 md:w-96 
                shadow-sm text-gray-800
              "
            >
              {/* Icon petik dua */}
              <div className="bg-yellow-500 rounded-full flex items-center justify-center p-3 mt-2 absolute -top-8 left-5 w-max shadow-md z-10">
                <h1 className="text-3xl font-serif text-white">
                  <FaQuoteLeft />
                </h1>
              </div>

              <div className="card-body mt-4">
                <h2 className="card-title text-white">{item.name}</h2>
                <h2 className="card-title text-yellow-500">
                  {"★".repeat(item.rating)}{" "}
                  <span className="text-gray-500">
                    {"★".repeat(5 - item.rating)}
                  </span>
                </h2>
                <p className="italic text-gray-300 line-clamp-3">
                  "{item.testimonial}"
                </p>
                <div className="card-actions mt-5 justify-end">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <GoogleIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentLayout>
    </div>
  );
};

export default Testimonial;
