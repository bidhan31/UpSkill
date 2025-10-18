import React, { useEffect, useState } from "react";
import { dummyDashboardData } from "../../assets/assets";
import Loading from "../../components/student/Loading";
import {
  FaDollarSign,
  FaUsers,
  FaBook,
  FaChartLine,
  FaStar,
} from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return dashboardData ? (
    <div className="bg-[#202E3B] min-h-screen text-white p-6 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">
        Instructor Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Earnings Card */}
        <div className="bg-[#2A3B4D] p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400">Total Earnings</p>
              <h2 className="text-2xl font-bold mt-2">
                ${dashboardData.totalEarnings.toFixed(2)}
              </h2>
            </div>
            <div className="bg-blue-500 p-3 rounded-full">
              <FaDollarSign className="text-xl" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm text-blue-400">
            <FaChartLine className="mr-1" />
            <span>+12% from last month</span>
          </div>
        </div>

        {/* Students Card */}
        <div className="bg-[#2A3B4D] p-6 rounded-xl shadow-lg border-l-4 border-green-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400">Enrolled Students</p>
              <h2 className="text-2xl font-bold mt-2">
                {dashboardData.enrolledStudentsData.length}
              </h2>
            </div>
            <div className="bg-green-500 p-3 rounded-full">
              <FaUsers className="text-xl" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm text-green-400">
            <BsGraphUp className="mr-1" />
            <span>+5 new this week</span>
          </div>
        </div>

        {/* Courses Card */}
        <div className="bg-[#2A3B4D] p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400">Total Courses</p>
              <h2 className="text-2xl font-bold mt-2">
                {dashboardData.totalCourses}
              </h2>
            </div>
            <div className="bg-purple-500 p-3 rounded-full">
              <FaBook className="text-xl" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm text-purple-400">
            <FaStar className="mr-1" />
            <span>4.8 average rating</span>
          </div>
        </div>
      </div>

      {/* Recent Enrollments */}
      <div className="bg-[#2A3B4D] rounded-xl shadow-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Recent Enrollments</h2>
          <button className="text-blue-400 hover:text-blue-300 text-sm">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[#36495C]">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#36495C]">
              {dashboardData.enrolledStudentsData.map((enrollment, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#36495C] transition-colors"
                >
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        src={enrollment.student.imageUrl}
                        alt={enrollment.student.name}
                        className="w-10 h-10 rounded-full object-cover mr-3"
                      />
                      <span>{enrollment.student.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-gray-300">
                    {enrollment.courseTitle}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-gray-300">
                    {new Date().toLocaleDateString()}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-900 text-green-300">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Course Performance */}
        <div className="bg-[#2A3B4D] rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Course Performance</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Introduction to JavaScript</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-[#36495C] rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Advanced Python Programming</span>
                <span>72%</span>
              </div>
              <div className="w-full bg-[#36495C] rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: "72%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Web Development Bootcamp</span>
                <span>91%</span>
              </div>
              <div className="w-full bg-[#36495C] rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ width: "91%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-[#2A3B4D] rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-500 p-2 rounded-full mr-3 mt-1">
                <FaUsers className="text-sm" />
              </div>
              <div>
                <p className="font-medium">New student enrolled</p>
                <p className="text-sm text-gray-400">
                  Great Stack joined "Cybersecurity Basics"
                </p>
                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-500 p-2 rounded-full mr-3 mt-1">
                <FaDollarSign className="text-sm" />
              </div>
              <div>
                <p className="font-medium">New payment received</p>
                <p className="text-sm text-gray-400">
                  $49.99 for "Data Science with Python"
                </p>
                <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-500 p-2 rounded-full mr-3 mt-1">
                <FaStar className="text-sm" />
              </div>
              <div>
                <p className="font-medium">New review received</p>
                <p className="text-sm text-gray-400">
                  5 stars for "Web Development Bootcamp"
                </p>
                <p className="text-xs text-gray-500 mt-1">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Dashboard;
