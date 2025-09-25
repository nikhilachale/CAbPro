// src/components/ReviewsPage.jsx
import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";
import ReviewsList from "./ReviewList";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/rev")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        console.error("Failed to fetch reviews:", error);
      });
  }, []);

  const handleReviewSubmit = (newReview) => {
    setReviews([...reviews, newReview]);
    setShowForm(false); // Hide form after successful submission
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="pt-16 pb-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="text-[#e57c35] ">TheCabBro</span>{" "}
            <span className="text-gray-800">Reviews</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Share your experience and read what others are saying
          </p>

          {/* Add Review Button */}
          <button
            onClick={toggleForm}
            className="bg-[#e57c35] hover:bg-[#d76b2c] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {showForm ? "Cancel" : "Add Your Review"}
          </button>
        </div>
      </div>

      {/* Review Form - Only show when showForm is true */}
      {showForm && (
        <div className="px-6 mb-12">
          <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8 max-w-3xl mx-auto transition-all duration-500 transform">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Write Your Review
            </h2>
            <ReviewForm onSubmit={handleReviewSubmit} />
          </div>
        </div>
      )}

      {/* Reviews List */}
      <div className="px-6 pb-12">
        <ReviewsList reviews={reviews} />
      </div>
    </div>
  );
};

export default ReviewsPage;