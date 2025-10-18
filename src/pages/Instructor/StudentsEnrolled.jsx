import React, { useEffect, useState } from "react";
import { dummyStudentEnrolled } from "../../assets/assets";
import Loading from "../../components/student/Loading";

const StudentsEnrolled = () => {
  const [enrolledStudents, setEnrolledStudents] = useState(null);

  const fetchEnrolledStudents = async () => {
    setEnrolledStudents(dummyStudentEnrolled);
  };

  useEffect(() => {
    fetchEnrolledStudents();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return enrolledStudents ? (
    <div className="bg-[#202E3B] min-h-screen text-white p-6 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Students Enrolled</h1>

      <div className="bg-[#2A3B4D] rounded-xl shadow-lg overflow-hidden">
        <table className="min-w-full divide-y divide-[#36495C]">
          <thead className="bg-[#36495C]">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider"
              >
                Student
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider"
              >
                Course
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider"
              >
                Enrollment Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#2A3B4D] divide-y divide-[#36495C]">
            {enrolledStudents.map((enrollment, index) => (
              <tr key={index} className="hover:bg-[#36495C] transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={enrollment.student.imageUrl}
                        alt={enrollment.student.name}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium">
                        {enrollment.student.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-blue-400">
                    {enrollment.courseTitle}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">
                    {formatDate(enrollment.purchaseDate)}
                  </div>
                </td>
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

export default StudentsEnrolled;
