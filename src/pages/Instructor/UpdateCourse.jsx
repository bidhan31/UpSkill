import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then((res) => res.json())
      .then((data) =>
        setCourse(data.find((c) => c._id === id))
      );
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:5000/api/courses/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(course),
    });

    alert("Course Updated");
    navigate("/instructor/my-courses");
  };

  if (!course) return <p>Loading...</p>;

  return (
    <form
      onSubmit={handleUpdate}
      className="p-6 text-white bg-[#202E3B]"
    >
      <input
        className="block mb-3 p-2 text-black"
        value={course.courseTitle}
        onChange={(e) =>
          setCourse({ ...course, courseTitle: e.target.value })
        }
      />
      <button className="bg-green-600 px-4 py-2 rounded">
        Update
      </button>
    </form>
  );
};

export default UpdateCourse;
