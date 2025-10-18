import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/student/Home";
import Instructor from "../pages/Instructor/Instructor";
import Dashboard from "../pages/Instructor/Dashboard";
import AddCourse from "../pages/Instructor/AddCourse";
import MyEnrollments from "../pages/student/MyEnrollments";
import CourseList from "../pages/student/CourseList";
import CourseDetails from "../pages/student/CourseDetails";
import Player from "../pages/student/Player";
import MyCourses from "../pages/Instructor/MyCourses";
import StudentsEnrolled from "../pages/Instructor/StudentsEnrolled";
import Payment from "../pages/student/Payment";
import LearnMorePage from "../pages/student/LearnMore";
import ErrorPage from "../pages/student/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Home></Home>,
    children: [
      {
        path: "my-enrollments",
        element: <MyEnrollments></MyEnrollments>,
      },
      {
        path: "course-list",
        element: <CourseList></CourseList>,
      },
      {
        path: "course-list/:input",
        element: <CourseList></CourseList>,
      },
      {
        path: "course-list/:course",
        element: <CourseList></CourseList>,
      },
      {
        path: "course/:id",
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "player/:courseId",
        element: <Player></Player>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "learn-more",
        element: <LearnMorePage></LearnMorePage>,
      },
    ],
  },
  {
    path: "/instructor",
    element: <Instructor></Instructor>,
    children: [
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "add-course",
        element: <AddCourse></AddCourse>,
      },
      {
        path: "my-courses",
        element: <MyCourses></MyCourses>,
      },
      {
        path: "students",
        element: <StudentsEnrolled></StudentsEnrolled>,
      },
    ],
  },
]);

export default router;
