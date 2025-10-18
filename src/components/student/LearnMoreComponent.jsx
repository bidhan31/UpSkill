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

const LearnMoreComponent = () => {
  return (
    <div className="bg-[#202E3B] text-gray-100">
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
    </div>
  );
};

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

export default LearnMoreComponent;
