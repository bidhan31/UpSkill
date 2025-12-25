import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import Loading from "../../components/student/Loading";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

/* ---------- Helper ---------- */
const safeArray = (arr) => (Array.isArray(arr) ? arr : []);

const MyCourses = () => {
  const { allCourses } = useContext(AuthContext);
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const formattedCourses = safeArray(allCourses).map((course) => ({
      ...course,
      enrolledStudents: safeArray(course.enrolledStudents),
      courseRatings: safeArray(course.courseRatings),
      discount: course.discount || 0,
      coursePrice: course.coursePrice || 0,
    }));

    setCourses(formattedCourses);
  }, [allCourses]);

  /* ---------- Delete ---------- */
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this course?")) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/courses/${id}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        setCourses((prev) =>
          prev.filter((course) => course._id !== id)
        );
        alert("Course deleted successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  /* ---------- Utils ---------- */
  const calculateEarnings = (course) => {
    const students = course.enrolledStudents.length;
    const price = course.coursePrice;
    const discount = course.discount;

    return (students * price * (1 - discount / 100)).toFixed(2);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (!courses) return <Loading />;

  return (
    <div className="bg-[#202E3B] min-h-screen text-white p-6 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">My Courses</h1>
        <Link
          to="/instructor/add-course"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
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
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#36495C]">
            {courses.map((course) => (
              <tr
                key={course._id}
                className="hover:bg-[#36495C]"
              >
                {/* Course Info */}
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={course.courseThumbnail}
                      alt={course.courseTitle}
                      className="w-16 h-10 object-cover rounded-md"
                    />
                    <div>
                      <div className="font-medium">
                        {course.courseTitle}
                      </div>
                      <div className="flex mt-1">
                        {[1, 2, 3, 4, 5].map((star) =>
                          course.courseRatings.some(
                            (r) => r.rating >= star
                          ) ? (
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

                {/* Students */}
                <td className="px-6 py-4 text-blue-400">
                  {course.enrolledStudents.length} enrolled
                </td>

                {/* Earnings */}
                <td className="px-6 py-4">
                  ${calculateEarnings(course)}
                </td>

                {/* Date */}
                <td className="px-6 py-4">
                  {formatDate(course.createdAt)}
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <Link
                      to={`/instructor/update-course/${course._id}`}
                      className="bg-yellow-500 px-3 py-1 rounded text-sm"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(course._id)}
                      className="bg-red-500 px-3 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCourses;
