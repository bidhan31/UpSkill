import React from "react";
import { FiAlertTriangle, FiHome, FiSearch, FiMail } from "react-icons/fi";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 text-gray-100"
      style={{ backgroundColor: "#202E3B" }}
    >
      {/* Main Content */}
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="bg-blue-500/20 p-6 rounded-full">
            <FiAlertTriangle className="text-5xl text-blue-400" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center justify-center"
          >
            <FiHome className="mr-2" /> Return Home
          </a>
          <a
            href="/contact"
            className="border border-blue-400 text-blue-400 hover:bg-blue-400/10 px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center justify-center"
          >
            <FiMail className="mr-2" /> Contact Support
          </a>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-12">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search our site..."
            className="w-full pl-10 pr-4 py-3 bg-[#2A3B4D] border border-[#354556] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-8 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-blue-400 transition-colors">
            <FaTwitter className="text-xl" />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <FaGithub className="text-xl" />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <FaLinkedin className="text-xl" />
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} UpSkill. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
