import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaPlusCircle,
  FaBookOpen,
  FaUsers,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useUser, UserButton } from "@clerk/clerk-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user } = useUser();
  const navItems = [
    {
      path: "/instructor/dashboard",
      name: "Dashboard",
      icon: <FaTachometerAlt className="text-lg" />,
    },
    {
      path: "/instructor/add-course",
      name: "Add Course",
      icon: <FaPlusCircle className="text-lg" />,
    },
    {
      path: "/instructor/my-courses",
      name: "My Courses",
      icon: <FaBookOpen className="text-lg" />,
    },
    {
      path: "/instructor/students",
      name: "Students Enrolled",
      icon: <FaUsers className="text-lg" />,
    },
  ];

  return (
    <div>
      {/* Mobile Toggle Button */}
      <div className="fixed md:hidden top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2  rounded-md bg-[#2A3B4D] text-white"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed md:relative md:translate-x-0 inset-y-0 left-0 z-40 md:z-auto
    transition-transform duration-300 ease-in-out w-64 bg-[#202E3B] 
    text-white shadow-lg overflow-y-auto`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Logo */}
          <div className="py-8 px-2 mb-6 border-b border-[#36495C]">
            <Link to="/instructor" className="text-2xl font-bold">
              Up<span className="text-blue-400">Skill</span>
            </Link>
            <p className="text-sm text-gray-400 mt-1">Instructor Panel</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center p-3 rounded-lg transition-colors
                      ${
                        location.pathname === item.path
                          ? "bg-[#2A3B4D] text-blue-400"
                          : "hover:bg-[#2A3B4D] hover:text-blue-300"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer/User Info - Optional */}
          <div className="mt-auto pt-4 border-t border-[#36495C]">
            <div className="hidden md:flex items-center space-x-6">
              {/* User Profile */}
              {user && (
                <div className="flex items-center space-x-2 ml-4">
                  <UserButton>
                    <span className="font-medium">{user.fullName}</span>
                  </UserButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;
