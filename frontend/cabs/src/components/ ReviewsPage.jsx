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
    <div className="bg-white min-h-screen p-6">
      <h1 className="text-blue-950 text-4xl  text-center font-semibold mb-8">
        TheCabBro Reviews
      </h1>
      <ReviewForm onSubmit={handleReviewSubmit} />
      <ReviewsList reviews={reviews} />
    
    </div>
  );
};

export default ReviewsPage;