import React from "react";
import Navbar from "../../components/student/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Hero from "../../components/student/Hero";
import HomeLayout from "./HomeLayout";
import Footer from "../../components/student/Footer";

const Home = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div className="bg-[#202E3B]">
      <Navbar></Navbar>
      {isHomePage && <HomeLayout></HomeLayout>}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
