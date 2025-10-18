import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import Loading from "../../components/student/Loading";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyCourses = () => {
  const { allCourses } = useContext(AuthContext);
  const [courses, setCourses] = useState(null);

  const fetchEducatorCourses = async () => {
    setCourses(allCourses);
  };

  useEffect(() => {
    fetchEducatorCourses();
  }, [allCourses]);

  const calculateEarnings = (course) => {
    const earnings =
      course.enrolledStudents.length *
      course.coursePrice *
      (1 - course.discount / 100);
    return earnings.toFixed(2);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return courses ? (
    <div className="bg-[#202E3B] min-h-screen text-white p-6 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">My Courses</h1>
        <Link
          to="/instructor/add-course"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Add New Course
        </Link>
      </div>

      <div className="bg-[#2A3B4D] rounded-xl shadow-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-[#36495C]">
            <tr>
              <th className="px-6 py-4 text-left">All Courses</th>
              <th className="px-6 py-4 text-left">Students</th>
              <th className="px-6 py-4 text-left">Earnings</th>
              <th className="px-6 py-4 text-left">Published Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#36495C]">
            {courses.map((course) => (
              <tr
                key={course._id}
                className="hover:bg-[#36495C] transition-colors"
              >
                {/* Course Column */}
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={course.courseThumbnail}
                      alt={course.courseTitle}
                      className="w-16 h-10 object-cover rounded-md"
                    />
                    <div>
                      <div className="font-medium">{course.courseTitle}</div>
                      <div className="flex mt-1">
                        {[1, 2, 3, 4, 5].map((star) =>
                          course.courseRatings.some((r) => r.rating >= star) ? (
                            <FaStar
                              key={star}
                              className="text-yellow-400 text-sm"
                            />
                          ) : (
                            <FaRegStar
                              key={star}
                              className="text-yellow-400 text-sm"
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Students Column */}
                <td className="px-6 py-4">
                  <div className="text-blue-400 font-medium">
                    {course.enrolledStudents.length} enrolled
                  </div>
                </td>

                {/* Earnings Column */}
                <td className="px-6 py-4">
                  <div className="font-medium">
                    ${calculateEarnings(course)}
                  </div>
                </td>

                {/* Published Date Column */}
                <td className="px-6 py-4">{formatDate(course.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MyCourses;
