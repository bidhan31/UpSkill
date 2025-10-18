import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-[#202E3B] text-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Unlock Your{" "}
            <span className="text-blue-400">Learning Potential</span> Today
          </h1>

          {/* Paragraph */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Discover thousands of courses taught by industry experts. Whether
            you're looking to advance your career or explore new hobbies, we
            have the perfect learning path for you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/course-list"
              className="btn btn-primary bg-blue-500 hover:bg-blue-600 border-none text-white px-8 py-3"
            >
              Browse Courses
            </Link>
            <Link
              to="/learn-more"
              className="btn btn-outline border-white hover:bg-white hover:text-[#202E3B] text-white px-8 py-3"
            >
              Learn More
            </Link>
          </div>
          <div className="mt-8">
            <Search></Search>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
