import { useState, useEffect } from "react";
import {
  FaSpinner,
  FaBookOpen,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaBrain,
} from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [activeIcon, setActiveIcon] = useState(0);
  const icons = [
    FaBookOpen,
    FaGraduationCap,
    FaChalkboardTeacher,
    FaLaptopCode,
    FaBrain,
    GiBookshelf,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const iconInterval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % icons.length);
    }, 800);

    return () => clearInterval(iconInterval);
  }, [icons.length]);

  const ActiveIcon = icons[activeIcon];

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-white"
      style={{ backgroundColor: "#202E3B" }}
    >
      <div className="text-center p-8 rounded-xl bg-gray-800 bg-opacity-80 shadow-2xl w-full max-w-md border border-gray-700">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-1 text-indigo-400 flex items-center">
            UpSkill
            <span className="ml-2 text-2xl text-emerald-400">
              <FaGraduationCap />
            </span>
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            Elevate your learning journey
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <ActiveIcon className="text-5xl text-emerald-400 animate-pulse" />
        </div>

        <p className="mb-6 text-gray-300 font-medium">
          Preparing your learning environment...
        </p>

        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
          <div
            className="bg-gradient-to-r from-indigo-400 to-emerald-400 h-2.5 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex justify-between text-sm text-gray-400">
          <span>{progress}%</span>
          <span className="flex items-center">
            <FaSpinner className="animate-spin mr-2 text-emerald-400" />
            Loading course materials
          </span>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          {icons.map((Icon, index) => (
            <Icon
              key={index}
              className={`text-xl ${
                index === activeIcon ? "text-emerald-400" : "text-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 text-xs text-gray-500">
        © {new Date().getFullYear()} UpSkill - Knowledge Awaits
      </div>
    </div>
  );
};

export default Loading;
