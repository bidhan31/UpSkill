import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useUser } from "@clerk/clerk-react";
const MySwal = withReactContent(Swal);

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");
  const [processing, setProcessing] = useState(false);
  const { user } = useUser();
  if (!state?.course) {
    navigate("/courses");
    return null;
  }

  const course = state.course;
  const discountedPrice =
    course.discount > 0
      ? (course.coursePrice * (1 - course.discount / 100)).toFixed(2)
      : null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // Simple validation
    if (!cardNumber || !expiry || !cvc || !name) {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all payment details!",
      });
      setProcessing(false);
      return;
    }

    try {
      // Mock API call to "process payment"
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Prepare enrollment data
      const enrollmentData = {
        courseId: course._id,
        courseTitle: course.courseTitle,
        courseThumbnail: course.courseThumbnail,
        courseInstructor: course.educator,
        amountPaid: discountedPrice || course.coursePrice,
        paymentDate: new Date().toISOString(),
        userName: user.fullName,
      };

      // API call to save enrollment to the database
      const response = await axios.post(
        "https://learnglove-server.vercel.app/enrollments",
        enrollmentData
      );

      if (response.status >= 200 && response.status < 300) {
        await MySwal.fire({
          icon: "success",
          title: "Payment Successful!",
          html: `
      <div>
        <p>You are now enrolled in <strong>${course.courseTitle}</strong></p>
        <p>Amount Paid: $${discountedPrice || course.coursePrice}</p>
      </div>
    `,
          confirmButtonText: "Start Learning",
          showCancelButton: true,
          cancelButtonText: "Back to Courses",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate(`/player/${course._id}`);
          } else {
            navigate("/course-list");
          }
        });
      } else {
        throw new Error("Failed to save enrollment");
      }
    } catch (error) {
      console.error("Error during payment or saving enrollment:", error);
      MySwal.fire({
        icon: "error",
        title: "Payment Failed",
        text: "There was an issue processing your payment. Please try again.",
      });
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#202E3B" }}
    >
      <div className="max-w-md mx-auto bg-gray-800 rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-white">
          Complete Your Payment
        </h1>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2 text-gray-300">
            Order Summary
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={course.courseThumbnail}
              alt={course.courseTitle}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-medium text-white">{course.courseTitle}</h3>
              {discountedPrice ? (
                <div>
                  <span className="text-lg font-bold text-emerald-400">
                    ${discountedPrice}
                  </span>
                  <span className="ml-2 line-through text-gray-400">
                    ${course.coursePrice}
                  </span>
                </div>
              ) : (
                <span className="text-lg font-bold text-emerald-400">
                  ${course.coursePrice}
                </span>
              )}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Card Number
            </label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) =>
                setCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16))
              }
              placeholder="4242 4242 4242 4242"
              className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                value={expiry}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  if (value.length <= 2) {
                    setExpiry(value);
                  } else if (value.length <= 4) {
                    setExpiry(`${value.slice(0, 2)}/${value.slice(2)}`);
                  }
                }}
                placeholder="MM/YY"
                className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                CVC
              </label>
              <input
                type="text"
                value={cvc}
                onChange={(e) =>
                  setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))
                }
                placeholder="123"
                className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Name on Card
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white"
              required
            />
          </div>

          <button
            type="submit"
            disabled={processing}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out ${
              processing ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {processing
              ? "Processing..."
              : `Pay $${discountedPrice || course.coursePrice}`}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400"></div>
      </div>
    </div>
  );
};

export default PaymentPage;
