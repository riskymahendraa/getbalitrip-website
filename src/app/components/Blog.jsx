import React from "react";
import { FaArrowRight } from "react-icons/fa";
import blogs from "../data/blogs.json";
import Image from "next/image";
import ContentLayout from "../Layouts/ContentLayout";

const Blog = () => {
  return (
    <div>
      <ContentLayout className="my-10">
        {/* Header */}
        <div className="grid grid-cols-2 gap-8 mb-10">
          <div>
            <h1 className="text-4xl leading-relaxed tracking-wide">
              Blog about <br /> traveling
            </h1>
          </div>
          <div>
            <p className="text-gray-500 text-justify leading-relaxed">
              Explore inspiring travel stories, expert tips, and curated guides
              to help you plan your dream journey in Bali. From hidden gems to
              luxury private tours, our blog brings you insights and experiences
              to make every adventure unforgettable.
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
          {blogs.blogs.slice(0, 3).map((blog, index) => {
            // Card pertama - Besar kiri (span 2 baris)
            if (index === 0) {
              return (
                <div key={blog.id} className="row-span-2">
                  <div className="card w-full h-full overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
                    <figure className="h-[700px] overflow-hidden relative">
                      <Image
                        src={blog.thumbnail}
                        alt={blog.title}
                        fill
                        className="object-cover w-full h-full"
                        priority
                      />
                    </figure>
                    <div className="card-body">
                      <div className="flex justify-between">
                        <div>
                          <h2 className="card-title">{blog.title}</h2>
                        </div>
                        <div className="text-gray-500">
                          {" "}
                          {new Date(blog.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </div>
                      </div>
                      <p className="text-gray-500">{blog.excerpt}</p>
                      <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          {blog.tags.map((tag, tagIndex) => (
                            <div key={tagIndex} className="badge badge-outline">
                              {tag}
                            </div>
                          ))}
                        </div>
                        <button className="btn px-4 py-2 btn-sm hover:scale-110 transition-all duration-300 text-white normal-case rounded-full">
                          Read more <FaArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            // Card kedua dan ketiga - Kanan atas dan bawah
            return (
              <div key={blog.id}>
                <div className="card w-full overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
                  <figure className="h-[260px] overflow-hidden relative">
                    <Image
                      src={blog.thumbnail}
                      alt={blog.title}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="flex justify-between">
                      <div>
                        <h2 className="card-title">{blog.title}</h2>
                      </div>
                      <div className="text-gray-500">
                        {" "}
                        {new Date(blog.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </div>
                    </div>
                    <p className="line-clamp-4 text-gray-500">{blog.excerpt}</p>
                    <div className="flex items-center justify-between mt-1">
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        {blog.tags.map((tag, tagIndex) => (
                          <div key={tagIndex} className="badge badge-outline">
                            {tag}
                          </div>
                        ))}
                      </div>
                      <button className="btn px-4 py-2 btn-sm hover:scale-110 transition-all duration-300 text-white normal-case rounded-full">
                        Read more <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ContentLayout>
    </div>
  );
};

export default Blog;
