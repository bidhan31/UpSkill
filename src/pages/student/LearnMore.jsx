import React from "react";
import {
  FiCheck,
  FiPlay,
  FiAward,
  FiUsers,
  FiClock,
  FiBookOpen,
  FiArrowRight,
} from "react-icons/fi";
import {
  FaChalkboardTeacher,
  FaMobileAlt,
  FaCertificate,
} from "react-icons/fa";

const LearnMorePage = () => {
  return (
    <div className="bg-[#202E3B] text-gray-100">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-500">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advance Your Career with UpSkill
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
            Learn in-demand skills from industry experts with our 10,000+
            courses
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#202E3B] px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition duration-300 flex items-center justify-center">
              Browse Courses <FiArrowRight className="ml-2" />
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[#202E3B] transition duration-300">
              How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2A3B4D]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <FiUsers className="text-4xl text-blue-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold mb-2">500K+</h3>
            <p className="text-gray-300">Active Learners</p>
          </div>
          <div className="p-4">
            <FaChalkboardTeacher className="text-4xl text-blue-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold mb-2">5K+</h3>
            <p className="text-gray-300">Expert Instructors</p>
          </div>
          <div className="p-4">
            <FiBookOpen className="text-4xl text-blue-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold mb-2">10K+</h3>
            <p className="text-gray-300">Courses Available</p>
          </div>
          <div className="p-4">
            <FaCertificate className="text-4xl text-blue-400 mx-auto mb-3" />
            <h3 className="text-3xl font-bold mb-2">1M+</h3>
            <p className="text-gray-300">Certificates Earned</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose UpSkill?</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We're revolutionizing online education with these key benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#2A3B4D] p-8 rounded-xl border border-[#354556] hover:border-blue-400 transition-colors"
              >
                <div className="text-blue-400 text-4xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2A3B4D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Popular Learning Paths</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Structured courses to take you from beginner to job-ready
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paths.map((path, index) => (
              <div
                key={index}
                className="bg-[#202E3B] border border-[#354556] rounded-xl overflow-hidden hover:border-blue-400 transition-colors"
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-3"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{path.title}</h3>
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <FiClock className="mr-1" /> {path.duration} •{" "}
                    {path.courses} courses
                  </div>
                  <ul className="space-y-2 mb-6">
                    {path.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <FiCheck className="text-blue-400 mr-2" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300">
                    Explore Path
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join millions of learners and start your journey today
          </p>
          <button className="bg-white text-[#202E3B] px-8 py-4 rounded-lg font-medium hover:bg-blue-100 transition duration-300 text-lg">
            Get Started - It's Free
          </button>
        </div>
      </section>
    </div>
  );
};

// Data
const benefits = [
  {
    icon: <FiAward />,
    title: "Industry-Recognized Certificates",
    description:
      "Get certificates that employers value to showcase your new skills",
  },
  {
    icon: <FaMobileAlt />,
    title: "Learn Anywhere",
    description:
      "Access courses on web and mobile with offline viewing options",
  },
  {
    icon: <FiClock />,
    title: "Self-Paced Learning",
    description:
      "Learn on your schedule with lifetime access to course materials",
  },
  {
    icon: <FiUsers />,
    title: "Community Support",
    description:
      "Join discussion forums and study groups with peers and mentors",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert Instructors",
    description: "Learn from professionals working at top companies worldwide",
  },
  {
    icon: <FiCheck />,
    title: "Practical Skills",
    description: "Hands-on projects and exercises to build real-world skills",
  },
];

const paths = [
  {
    title: "Full-Stack Web Development",
    duration: "6 months",
    courses: 12,
    features: [
      "HTML/CSS/JavaScript",
      "React & Node.js",
      "Database Fundamentals",
      "Deployment & DevOps",
    ],
  },
  {
    title: "Data Science Foundations",
    duration: "4 months",
    courses: 8,
    features: [
      "Python for Data Science",
      "Machine Learning Basics",
      "Data Visualization",
      "Statistical Analysis",
    ],
  },
  {
    title: "Digital Marketing Professional",
    duration: "3 months",
    courses: 6,
    features: [
      "SEO & Content Marketing",
      "Social Media Strategy",
      "Google Analytics",
      "Email Marketing",
    ],
  },
];

export default LearnMorePage;
