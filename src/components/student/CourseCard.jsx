import { FaStar, FaRegStar, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <Link
      to={`/course/${course._id}`}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
    >
      {/* Thumbnail */}
      <div className="relative pb-[56.25%] overflow-hidden">
        <img
          src={course.courseThumbnail}
          alt={course.courseTitle}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Course Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2 min-h-[3rem]">
          {course.courseTitle}
        </h3>

        {/* Instructor */}
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <FaUserAlt className="mr-1 text-gray-500" />
          <span>{course.educator}</span>
        </div>

        {/* Rating and Students */}
        <div className="flex items-center justify-between mb-3">
          {/* <div className="flex items-center">
            <p className=" text-gray-500">{calculateRating(course)}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={
                    i < Math.floor(calculateRating(course))
                      ? assets.star
                      : assets.star_blank
                  }
                ></img>
              ))}
              <p className=" text-gray-500">22</p>
            </div>
          </div> */}
          <div>
            <p className=" text-gray-500">
              ${" "}
              {(
                course.coursePrice -
                (course.discount * course.coursePrice) / 100
              ).toFixed(2)}
            </p>
          </div>
          {/* Duration and Price */}
          {/* <div className="flex items-center justify-between border-t pt-3">
            <span className="text-sm text-gray-600">{duration}</span>
            <div className="text-right">
              <span className="text-lg font-bold text-gray-900">
                ${price.toFixed(2)}
              </span>
              {price > 99 && (
                <span className="block text-xs text-gray-500 line-through">
                  ${(price * 1.2).toFixed(2)}
                </span>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
