// src/components/ReviewsPage.jsx
import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";
import ReviewsList from "./ReviewList";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

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
  };

  return (
    <div className="bg-white min-h-screen p-6 text-neutral-900">
      <h1 className="text-4xl font-extrabold text-center mb-10 tracking-tight">
        <span className="text-yellow-500">TheCabBro</span>{" "}
        <span className="text-neutral-800">Reviews</span>
      </h1>

      <div className="bg-neutral-100 border border-neutral-300 shadow-md rounded-xl p-6 max-w-3xl mx-auto mb-12 transition-all duration-300 hover:shadow-amber-300/30">
        <ReviewForm onSubmit={handleReviewSubmit} />
      </div>

      <div className="max-w-4xl mx-auto">
        <ReviewsList reviews={reviews} />
      </div>
    </div>
  );
};

export default ReviewsPage;