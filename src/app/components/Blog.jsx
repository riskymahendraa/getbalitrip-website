import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ContentLayout from "../Layouts/ContentLayout";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <ContentLayout className="my-10">
        {/* Header */}
        <div className="grid grid-cols-2 gap-8 mb-10">
          <div>
            <h1 className="text-4xl leading-relaxed tracking-wide">
              Blog about <br /> traveling
            </h1>
          </div>
          <div>
            <p className="text-gray-500 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius qui,
              id similique ipsa fugit autem, maiores assumenda nam tempora
              adipisci quam hic pariatur beatae illum iusto consequuntur quis
              maxime eveniet.
            </p>
            <div className="my-5">
              <button className="border-2 flex items-center gap-x-2 border-gray-500 px-5 py-2.5 rounded-2xl hover:bg-lime-700 hover:text-white active:scale-95 transition-all duration-300 font-semibold cursor-pointer w-fit text-sm tracking-wide shadow-lg hover:shadow-xl">
                Read all articles →
              </button>
            </div>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-2 gap-8">
          {/* Card besar kiri (span 2 baris) */}
          <div className="row-span-2">
            <div className="card w-full h-full overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
              <figure className="h-[650px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                  alt="Island"
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Island with beautiful nature</h2>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                  facere unde laborum nihil, est alias nesciunt nobis laboriosam
                  ex explicabo officiis sequi eos odio quasi repellendus rem
                  tenetur illum exercitationem?
                </p>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-2 mt-1">
                    <div className="badge badge-outline">Trip</div>
                    <div className="badge badge-outline">Nature</div>
                    <div className="badge badge-outline">Rocks</div>
                  </div>
                  <button className="btn px-4 py-2 btn-sm hover:scale-110 transition-all duration-300 text-white normal-case rounded-full">
                    Read more <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card kanan atas */}
          <div>
            <div className="card w-full overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
              <figure className="h-[250px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518684079-3c830dcef090"
                  alt="Weather in the Azores"
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Weather in the Azores</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima odit, quaerat veniam provident ipsum consectetur, modi
                  quasi distinctio, quia aperiam asperiores ab nemo? Dignissimos
                  eaque consectetur atque aut sequi est?
                </p>
                <div className="flex gap-2 mt-2">
                  <div className="badge badge-outline">Weather</div>
                  <div className="badge badge-outline">Nature</div>
                  <div className="badge badge-outline">Azores</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card kanan bawah */}
          <div>
            <div className="card w-full overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
              <figure className="h-[250px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                  alt="Hiking in the mountains"
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Hiking in the mountains</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                  provident ullam? Quis, autem illo ratione rem, veniam
                  doloribus laudantium consequuntur hic voluptates eius
                  accusamus tenetur velit exercitationem? Distinctio, illo
                  laborum?
                </p>
                <div className="flex gap-2 mt-2">
                  <div className="badge badge-outline">Trip</div>
                  <div className="badge badge-outline">Nature</div>
                  <div className="badge badge-outline">Mountains</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentLayout>
    </div>
  );
};

export default Blog;
