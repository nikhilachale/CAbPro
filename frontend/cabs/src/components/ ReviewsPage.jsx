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
    <div className="bg-yellow-50 min-h-screen p-6">
      <h1 className="text-blue-900 text-4xl text-center font-bold mb-8 underline decoration-yellow-400">
        TheCabBro Reviews
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto mb-10">
        <ReviewForm onSubmit={handleReviewSubmit} />
      </div>
      <div className="max-w-4xl mx-auto">
        <ReviewsList reviews={reviews} />
      </div>
    </div>
  );
};

export default ReviewsPage;