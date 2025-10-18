import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { dummyTestimonial } from "../../assets/assets"; // adjust the path as needed

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} className="text-yellow-400" />);
  }
  if (hasHalf) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
  }
  while (stars.length < 5) {
    stars.push(
      <FaRegStar key={`empty-${stars.length}`} className="text-yellow-400" />
    );
  }
  return stars;
};

const TestimonialSection = () => {
  return (
    <section className="py-16 px-6 bg-[gray] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">
          What Our Users Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {dummyTestimonial.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#2A3A4A] p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-300">{testimonial.role}</p>
              <div className="flex justify-center my-2">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-200 mt-4 text-sm">
                {testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
