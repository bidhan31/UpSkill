import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useUser, UserButton } from "@clerk/clerk-react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import {
  FaTachometerAlt,
  FaPlusCircle,
  FaBookOpen,
  FaUsers,
} from "react-icons/fa";

const InstructorNavbar = () => {


  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const location = useLocation();

  const navItems = [
    {
      path: "/instructor/dashboard",
      name: "Dashboard",
      icon: <FaTachometerAlt className="mr-2" />,
    },
    {
      path: "/instructor/add-course",
      name: "Add Course",
      icon: <FaPlusCircle className="mr-2" />,
    },
    {
      path: "/instructor/my-courses",
      name: "My Courses",
      icon: <FaBookOpen className="mr-2" />,
    },
    {
      path: "/instructor/students",
      name: "Students",
      icon: <FaUsers className="mr-2" />,
    },
  ];

  return (
    <nav className="bg-[#202E3B] text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              Up<span className="text-blue-400">Skill</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Navigation Links */}
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? "bg-[#2A3B4D] text-blue-400"
                      : "hover:bg-[#2A3B4D] hover:text-blue-300"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            {/* User Profile */}
            {user && (
              <div className="flex items-center ml-4">
                <UserButton />
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <IoClose className="h-6 w-6" />
              ) : (
                <HiMenuAlt3 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Now with better visibility */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out bg-[#2A3B4D] rounded-lg mt-2 ${
            isOpen
              ? "max-h-screen py-4 px-3 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-[#36495C] text-blue-400"
                    : "hover:bg-[#36495C] hover:text-blue-300"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span className="ml-2 font-medium">{item.name}</span>
              </Link>
            ))}

            {/* Mobile User Profile */}
            {user && (
              <div className="pt-3 border-t border-[#36495C]">
                <div className="flex items-center px-4 py-3">
                  <UserButton />
                  <span className="ml-3 font-medium">{user.fullName}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default InstructorNavbar;
