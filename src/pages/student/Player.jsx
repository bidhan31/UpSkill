import { useContext, useEffect, useState, useRef } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useParams } from "react-router-dom";
import { FaRegPlayCircle, FaLock } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import ReactPlayer from "react-player";
import Loading from "../../components/student/Loading";

const Player = () => {
  const { allCourses } = useContext(AuthContext);
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [currentLecture, setCurrentLecture] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const playerRef = useRef(null);
  console.log(courseId);
  // Find the course data
  useEffect(() => {
    const course = allCourses.find((course) => course._id === courseId);
    if (course) {
      setCourseData(course);
      // Set first lecture as default
      if (
        course.courseContent.length > 0 &&
        course.courseContent[0].chapterContent.length > 0
      ) {
        setCurrentLecture(course.courseContent[0].chapterContent[0]);
      }
    }
  }, [courseId, allCourses]);

  const handleSeekTo = (minutes) => {
    if (playerRef.current) {
      playerRef.current.seekTo(minutes * 60, "seconds");
    }
  };

  if (!courseData || !currentLecture) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex flex-col lg:flex-row bg-[#202E3B] min-h-screen text-white w-11/12 mx-auto gap-5 py-8">
      {/* Main Video Player */}
      <div className={`lg:flex-1 ${sidebarOpen ? "lg:w-3/4" : "lg:w-full"}`}>
        <div className="bg-black aspect-video w-full">
          <ReactPlayer
            ref={playerRef}
            url={currentLecture.lectureUrl}
            width="100%"
            height="100%"
            controls
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
          />
        </div>

        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">
            {currentLecture.lectureTitle}
          </h1>
          <div className="flex items-center text-gray-400 mb-4">
            <AiOutlineClockCircle className="mr-1" />
            <span>{(currentLecture.lectureDuration / 60).toFixed(1)} min</span>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden bg-[#2A3B4D] px-4 py-2 rounded mb-4"
          >
            {sidebarOpen ? "Hide Chapters" : "Show Chapters"}
          </button>
        </div>
      </div>

      {/* Chapters/Timestamps Sidebar */}
      {sidebarOpen && (
        <div className="lg:w-1/4 bg-[#2A3B4D] border-l border-[#36495C] overflow-y-auto">
          <div className="p-4 sticky top-0 bg-[#2A3B4D] border-b border-[#36495C] z-10">
            <h2 className="text-xl font-bold">{courseData.courseTitle}</h2>
            <p className="text-sm text-gray-400 mt-1">
              {courseData.courseContent.reduce(
                (acc, chapter) => acc + chapter.chapterContent.length,
                0
              )}{" "}
              sections
            </p>
          </div>

          <div className="divide-y divide-[#36495C]">
            {courseData.courseContent.map((chapter) => (
              <div key={chapter.chapterId} className="py-2">
                <div className="px-4 py-3 font-medium">
                  {chapter.chapterOrder}. {chapter.chapterTitle}
                </div>

                <ul className="mt-1">
                  {chapter.chapterContent.map((lecture) => (
                    <li
                      key={lecture.lectureId}
                      onClick={() => handleSeekTo(lecture.lectureDuration / 60)}
                      className="px-4 py-3 cursor-pointer hover:bg-[#36495C] flex items-center"
                    >
                      <div className="flex items-center">
                        <FaRegPlayCircle className="mr-3 text-blue-400" />
                        <div>
                          <div>{lecture.lectureTitle}</div>
                          <div className="text-xs text-gray-400">
                            Jump to {(lecture.lectureDuration / 60).toFixed(1)}{" "}
                            min
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
