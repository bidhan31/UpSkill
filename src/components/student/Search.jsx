import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const Search = ({ data }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");
  const handleSearchBar = (e) => {
    e.preventDefault();
    navigate("/course-list/" + input);
  };
  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearchBar} className="relative flex items-center">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Search for courses, instructors, or topics..."
          className="w-full py-3 pl-12 pr-6 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm transition-all duration-200 text-white"
        />
        <FiSearch className="absolute left-4 text-gray-400 text-xl" />
        <button className="absolute right-2 bg-blue-500 hover:bg-blue-600 text-white py-1.5 px-4 rounded-md transition-colors duration-200">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
