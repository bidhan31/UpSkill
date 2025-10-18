import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../../components/instructor/Sidebar";
import InstructorNavbar from "../../components/instructor/Navbar";
import Footer from "../../components/student/Footer";

const Instructor = () => {
  return (
    <div className="bg-[#202E3B]">
      <InstructorNavbar></InstructorNavbar>
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Instructor;
