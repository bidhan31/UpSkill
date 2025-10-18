import React, { useState } from "react";
import { FaUpload, FaPlus, FaTrash, FaSave } from "react-icons/fa";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
const AddCourse = () => {
  const { user } = useUser();

  const [courseData, setCourseData] = useState({
    courseTitle: "",
    courseDescription: "",
    coursePrice: "",
    discount: "",
    courseThumbnail: "",
    isPublished: false,
    courseContent: [],
    educator: user?.fullName || "",
  });

  const [newChapter, setNewChapter] = useState({
    chapterTitle: "",
    chapterContent: [],
  });

  const [newLecture, setNewLecture] = useState({
    lectureTitle: "",
    lectureDuration: "",
    lectureUrl: "",
    isPreviewFree: false,
  });

  const [currentChapterIndex, setCurrentChapterIndex] = useState(null);
  console.log(currentChapterIndex);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCourseData({
      ...courseData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleChapterChange = (e) => {
    const { name, value } = e.target;
    setNewChapter({
      ...newChapter,
      [name]: value,
    });
  };

  const handleLectureChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewLecture({
      ...newLecture,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const addChapter = () => {
    if (newChapter.chapterTitle.trim() === "") return;

    setCourseData({
      ...courseData,
      courseContent: [
        ...courseData.courseContent,
        {
          chapterId: `chapter${courseData.courseContent.length + 1}`,
          chapterOrder: courseData.courseContent.length + 1,
          chapterTitle: newChapter.chapterTitle,
          chapterContent: [],
        },
      ],
    });
    setNewChapter({ chapterTitle: "", chapterContent: [] });
  };

  const addLecture = (chapterIndex) => {
    if (
      newLecture.lectureTitle.trim() === "" ||
      newLecture.lectureUrl.trim() === ""
    )
      return;

    const updatedCourseContent = [...courseData.courseContent];
    updatedCourseContent[chapterIndex].chapterContent.push({
      lectureId: `lecture${
        updatedCourseContent[chapterIndex].chapterContent.length + 1
      }`,
      lectureOrder:
        updatedCourseContent[chapterIndex].chapterContent.length + 1,
      ...newLecture,
    });

    setCourseData({
      ...courseData,
      courseContent: updatedCourseContent,
    });
    setNewLecture({
      lectureTitle: "",
      lectureDuration: "",
      lectureUrl: "",
      isPreviewFree: false,
    });
  };

  const removeChapter = (index) => {
    const updatedCourseContent = courseData.courseContent.filter(
      (_, i) => i !== index
    );
    setCourseData({
      ...courseData,
      courseContent: updatedCourseContent,
    });
  };

  const removeLecture = (chapterIndex, lectureIndex) => {
    const updatedCourseContent = [...courseData.courseContent];
    updatedCourseContent[chapterIndex].chapterContent = updatedCourseContent[
      chapterIndex
    ].chapterContent.filter((_, i) => i !== lectureIndex);

    setCourseData({
      ...courseData,
      courseContent: updatedCourseContent,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your backend API endpoint
      const response = await axios.post(
        "https://learnglove-server.vercel.app/courses",
        courseData
      );

      // Show success message
      alert(response.data.message || "Course submitted successfully!");

      // Reset the form
      setCourseData({
        courseTitle: "",
        courseDescription: "",
        coursePrice: "",
        discount: "",
        courseThumbnail: "",
        isPublished: false,
        courseContent: [],
      });

      setNewChapter({
        chapterTitle: "",
        chapterContent: [],
      });

      setNewLecture({
        lectureTitle: "",
        lectureDuration: "",
        lectureUrl: "",
        isPreviewFree: false,
      });

      setCurrentChapterIndex(null);
    } catch (error) {
      console.error("Error submitting course:", error);
      alert("Failed to submit course. Please try again.");
    }
  };

  return (
    <div className="bg-[#202E3B] min-h-screen text-white p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Add New Course</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Course Information */}
          <div className="bg-[#2A3B4D] rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 border-b border-[#36495C] pb-2">
              Course Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Course Title
                </label>
                <input
                  type="text"
                  name="courseTitle"
                  value={courseData.courseTitle}
                  onChange={handleInputChange}
                  className="w-full bg-[#36495C] border border-[#4A5B6C] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Course Thumbnail URL
                </label>
                <div className="flex">
                  <input
                    type="text"
                    name="courseThumbnail"
                    value={courseData.courseThumbnail}
                    onChange={handleInputChange}
                    className="flex-1 bg-[#36495C] border border-[#4A5B6C] rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://example.com/image.jpg"
                    required
                  />
                  <button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 px-4 rounded-r-lg flex items-center"
                  >
                    <FaUpload className="mr-2" /> Upload
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">
                Course Description
              </label>
              <textarea
                name="courseDescription"
                value={courseData.courseDescription}
                onChange={handleInputChange}
                rows={5}
                className="w-full bg-[#36495C] border border-[#4A5B6C] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Course Price ($)
                </label>
                <input
                  type="number"
                  name="coursePrice"
                  value={courseData.coursePrice}
                  onChange={handleInputChange}
                  min="0"
                  step="0.01"
                  className="w-full bg-[#36495C] border border-[#4A5B6C] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Discount (%)
                </label>
                <input
                  type="number"
                  name="discount"
                  value={courseData.discount}
                  onChange={handleInputChange}
                  min="0"
                  max="100"
                  className="w-full bg-[#36495C] border border-[#4A5B6C] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-end">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="isPublished"
                    checked={courseData.isPublished}
                    onChange={handleInputChange}
                    className="h-5 w-5 rounded bg-[#36495C] border-[#4A5B6C] text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium">Publish Course</span>
                </label>
              </div>
            </div>
          </div>

          {/* Course Content */}
          <div className="bg-[#2A3B4D] rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 border-b border-[#36495C] pb-2">
              Course Content
            </h2>

            {/* Add Chapter */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Add New Chapter
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="chapterTitle"
                  value={newChapter.chapterTitle}
                  onChange={handleChapterChange}
                  placeholder="Chapter Title"
                  className="flex-1 bg-[#36495C] border border-[#4A5B6C] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={addChapter}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center"
                >
                  <FaPlus className="mr-2" /> Add Chapter
                </button>
              </div>
            </div>

            {/* Chapters List */}
            {courseData.courseContent.map((chapter, chapterIndex) => (
              <div
                key={chapterIndex}
                className="mb-8 border border-[#36495C] rounded-lg p-4"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">
                    Chapter {chapter.chapterOrder}: {chapter.chapterTitle}
                  </h3>
                  <button
                    type="button"
                    onClick={() => removeChapter(chapterIndex)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <FaTrash />
                  </button>
                </div>

                {/* Add Lecture */}
                <div className="mb-4 p-4 bg-[#36495C] rounded-lg">
                  <h4 className="text-sm font-medium mb-3">
                    Add Lecture to this Chapter
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-medium mb-1">
                        Lecture Title
                      </label>
                      <input
                        type="text"
                        name="lectureTitle"
                        value={newLecture.lectureTitle}
                        onChange={handleLectureChange}
                        className="w-full bg-[#4A5B6C] border border-[#5B6C7D] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">
                        Video URL
                      </label>
                      <input
                        type="text"
                        name="lectureUrl"
                        value={newLecture.lectureUrl}
                        onChange={handleLectureChange}
                        className="w-full bg-[#4A5B6C] border border-[#5B6C7D] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-medium mb-1">
                        Duration (minutes)
                      </label>
                      <input
                        type="number"
                        name="lectureDuration"
                        value={newLecture.lectureDuration}
                        onChange={handleLectureChange}
                        min="1"
                        className="w-full bg-[#4A5B6C] border border-[#5B6C7D] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div className="flex items-end">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="isPreviewFree"
                          checked={newLecture.isPreviewFree}
                          onChange={handleLectureChange}
                          className="h-4 w-4 rounded bg-[#4A5B6C] border-[#5B6C7D] text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-xs">Free Preview</span>
                      </label>
                    </div>
                    <div className="flex items-end justify-end">
                      <button
                        type="button"
                        onClick={() => addLecture(chapterIndex)}
                        className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg text-sm flex items-center"
                      >
                        <FaPlus className="mr-1" /> Add Lecture
                      </button>
                    </div>
                  </div>
                </div>

                {/* Lectures List */}
                {chapter.chapterContent.length > 0 && (
                  <div className="border-t border-[#36495C] pt-4">
                    <h4 className="text-sm font-medium mb-3">Lectures</h4>
                    <ul className="space-y-2">
                      {chapter.chapterContent.map((lecture, lectureIndex) => (
                        <li
                          key={lectureIndex}
                          className="flex justify-between items-center bg-[#36495C] p-3 rounded-lg"
                        >
                          <div>
                            <span className="text-sm font-medium">
                              {lecture.lectureOrder}. {lecture.lectureTitle}
                            </span>
                            <div className="flex items-center text-xs text-gray-400 mt-1">
                              <span>{lecture.lectureDuration} min</span>
                              {lecture.isPreviewFree && (
                                <span className="ml-2 px-2 py-0.5 bg-blue-900 text-blue-300 rounded-full text-xs">
                                  Free Preview
                                </span>
                              )}
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              removeLecture(chapterIndex, lectureIndex)
                            }
                            className="text-red-400 hover:text-red-300 text-sm"
                          >
                            <FaTrash />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-medium flex items-center"
            >
              <FaSave className="mr-2" /> Save Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
