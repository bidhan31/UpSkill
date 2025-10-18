import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

import humanizeDuration from "humanize-duration";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import Loading from "../../components/student/Loading";
const AuthProvider = ({ children }) => {
  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const { isLoaded } = useUser();
  const [loading, setLoading] = useState(true);

  const fetchAllCourses = async () => {
    try {
      const response = await axios.get(
        "https://learnglove-server.vercel.app/courses"
      ); // Replace with your backend API endpoint
      setAllCourses(response.data); // Assuming the API returns an array of courses
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (isLoaded) {
        await fetchAllCourses();
        await fetchUserEnrolledCourses();
        setLoading(false); // Set loading to false after data is fetched
      }
    };
    fetchData();
  }, [isLoaded]);

  //calculate course chapter time
  const calculateChapterTime = (chapter) => {
    let time = 0;
    chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration));
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  const calculateCourseDuration = (course) => {
    let time = 0;

    course.courseContent.map((chapter) =>
      chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration))
    );
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  //function to calculate no of lectures in the course

  const calculateNoOfLectures = (course) => {
    let totalLectures = 0;
    course.courseContent.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        totalLectures += chapter.chapterContent.length;
      }
    });
    return totalLectures;
  };

  // const fetchUserEnrolledCourses = async () => {
  //   setEnrolledCourses(dummyCourses);
  // };

  const fetchUserEnrolledCourses = async () => {
    try {
      const response = await axios.get(
        "https://learnglove-server.vercel.app/enrollments"
      ); // Replace with your backend API endpoint
      setEnrolledCourses(response.data); // Assuming the API returns an array of enrollments
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
    }
  };

  useEffect(() => {
    fetchAllCourses();
    fetchUserEnrolledCourses();
  }, []);
  const authInfo = {
    allCourses,
    isEducator,
    setIsEducator,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
    fetchUserEnrolledCourses,
    enrolledCourses,
  };

  if (loading) {
    // Show a loading spinner or placeholder while data is being fetched
    return <Loading></Loading>;
  }

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
