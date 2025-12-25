import { useState } from "react";
import api from "../../api/api";

const InstructorLogin = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", { email, password });

      if (res.data.role !== "instructor") {
        return alert("Not an instructor account");
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      setUser(res.data);
    } catch {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Instructor Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
};

export default InstructorLogin;
