import { useEffect, useState } from "react";
import api from "../../api/api";

api.get("/student/dashboard", {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});


const StudentDashboard = ({ user }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get("/courses")
      .then(res => setCourses(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Welcome {user.email}</h1>
      <h2>Courses</h2>
      <ul>
        {courses.map(c => <li key={c.id}>{c.title}</li>)}
      </ul>
    </div>
  );
};

export default StudentDashboard;
