import React, { useState, useEffect } from "react";

const ReviewForm = ({ onNewReview }) => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [reviews, setReviews] = useState([]);

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/rev";

  // Fetch reviews on mount
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        if (res.ok) setReviews(data);
        else console.error("Failed to fetch reviews", data);
      } catch (err) {
        console.error("Network error", err);
      }
    };
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !review || rating === 0) {
      setMessage("⚠️ Please fill all fields and give a rating.");
      return;
    }

    const newReview = { name, description: review, star: rating };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.msg || "✅ Review submitted successfully!");
        setReviews((prev) => [newReview, ...prev]);
        setName("");
        setReview("");
        setRating(0);
        if (onNewReview) onNewReview(newReview);
      } else {
        setMessage(data.msg || "❌ Failed to submit review.");
      }
    } catch (err) {
      console.error("Error submitting review:", err);
      setMessage("⚠️ Network error. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center text-[#e57c35] ">
        Write a Review
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <div>
          <textarea
            placeholder="Write your thoughts..."
            className="w-full border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 rounded-lg resize-none text-sm sm:text-base focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows={4}
          />
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <span className="text-sm sm:text-base font-medium text-gray-700">Rating:</span>
          <div className="flex space-x-1 sm:space-x-2 justify-center sm:justify-start">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                className={`cursor-pointer text-2xl sm:text-3xl transition-colors duration-200 ${
                  star <= rating ? "text-[#e57c35]  hover:text-yellow-600" : "text-gray-300 hover:text-gray-400"
                }`}
              >
                ★
              </span>
            ))}
          </div>
          {rating > 0 && (
            <span className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
              {rating} out of 5 stars
            </span>
          )}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#e57c35]  hover:bg-yellow-600 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            Submit Review
          </button>
        </div>

        {message && (
          <div className="text-center mt-4 p-3 rounded-lg bg-gray-50">
            <p className="text-sm sm:text-base">{message}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ReviewForm;