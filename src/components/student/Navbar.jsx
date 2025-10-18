import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaUserPlus,
  FaTachometerAlt,
} from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import AuthContext from "../../context/AuthContext/AuthContext";
const Navbar = () => {
  const { isEducator } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const { openSignIn } = useClerk();
  const { user } = useUser();

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
            {user && (
              <>
                <Link
                  to={"/instructor/dashboard"}
                  className="flex items-center hover:text-blue-300 transition-colors"
                >
                  {isEducator ? (
                    <>
                      <FaTachometerAlt className="mr-2"></FaTachometerAlt>
                      Instructor Dashboard
                    </>
                  ) : (
                    <>
                      <FaChalkboardTeacher></FaChalkboardTeacher>
                      Become an Instructor
                    </>
                  )}
                </Link>
                <Link
                  to="/my-enrollments"
                  className="flex items-center hover:text-blue-300 transition-colors"
                >
                  <FaBookOpen className="mr-2" />
                  My Enrollments
                </Link>{" "}
              </>
            )}
            {user ? (
              <UserButton></UserButton>
            ) : (
              <Link
                onClick={() => openSignIn()}
                className="btn btn-primary rounded-3xl bg-blue-500 hover:bg-blue-600 border-none text-white"
              >
                <FaUserPlus className="mr-2" />
                Create Account
              </Link>
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

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 py-4" : "max-h-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-4 mt-4">
            {user && (
              <>
                <Link
                  to="/instructor"
                  className="flex items-center hover:text-blue-300 transition-colors px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {isEducator ? (
                    <>
                      <FaTachometerAlt className="mr-2"></FaTachometerAlt>
                      Instructor Dashboard
                    </>
                  ) : (
                    <>
                      <FaChalkboardTeacher></FaChalkboardTeacher>
                      Become an Instructor
                    </>
                  )}
                </Link>
                <Link
                  to="/my-enrollments"
                  className="flex items-center hover:text-blue-300 transition-colors px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  <FaBookOpen className="mr-2" />
                  My Enrollments
                </Link>
              </>
            )}
            {user ? (
              <UserButton></UserButton>
            ) : (
              <Link
                className="btn btn-primary rounded-3xl bg-blue-500 hover:bg-blue-600 border-none text-white w-full justify-start"
                onClick={() => {
                  setIsOpen(false); // Close mobile menu
                  openSignIn(); // Call sign-in function
                }}
              >
                <FaUserPlus className="mr-2" />
                Create Account
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
