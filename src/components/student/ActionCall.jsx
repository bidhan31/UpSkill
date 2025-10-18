import React from "react";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const ActionCall = () => {
  return (
    <section className="bg-[#202E3B] text-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to <span className="text-blue-400">Transform</span> Your
            Skills?
          </h2>

          {/* Paragraph */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Join our community of learners and get access to premium courses
            taught by industry-leading professionals.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Primary Button - Get Started */}
            <Link
              to="/course-list"
              className="btn btn-primary bg-blue-500 hover:bg-blue-600 border-none text-white px-8 py-3 flex items-center justify-center"
            >
              Get Started <FaArrowRight className="ml-2" />
            </Link>

            {/* Secondary Button - Learn More */}
            <button className="btn btn-outline border-white hover:bg-white hover:text-[#202E3B] text-white px-8 py-3 flex items-center justify-center">
              <FaPlayCircle className="mr-2" /> Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionCall;
