import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import CourseCard from "./CourseCard";

const CourseSection = () => {
  const { allCourses } = useContext(AuthContext);
  return (
    <div className="bg-[#202E3B] text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Our Courses</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover a wide range of courses taught by industry experts to boost
            your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {allCourses.slice(0, 4).map((course, index) => (
            <CourseCard key={index} course={course}></CourseCard>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to={"/course-list"}
            onClick={() => scrollTo(0, 0)}
            className="btn btn-outline border-white hover:bg-white hover:text-[#202E3B] text-white"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
