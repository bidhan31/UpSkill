import { useState } from "react";
import StudentLogin from "./pages/student/Login";
import InstructorLogin from "./pages/Instructor/Login";
import StudentDashboard from "./pages/student/Dashboard";
import InstructorDashboard from "./pages/Instructor/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return (
      <>
        <StudentLogin setUser={setUser} />
        <InstructorLogin setUser={setUser} />
      </>
    );
  }

  if (user.role === "student") return <StudentDashboard />;
  if (user.role === "instructor") return <InstructorDashboard />;

  return null;
}

export default App;
