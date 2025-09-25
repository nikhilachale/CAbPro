import React, { useState, useEffect } from "react";

const ReviewForm = ({ onNewReview }) => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [reviews, setReviews] = useState([]);

  const API_URL = "http://localhost:3000/rev"; // change if deployed

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
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#e57c35]">
        Write a Review
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-amber-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Write your thoughts..."
          className="w-full border px-4 py-2 rounded resize-none focus:ring-2 focus:ring-amber-400"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={4}
        />
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              className={`cursor-pointer text-3xl ${
                star <= rating ? "text-amber-500" : "text-neutral-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>

        <button
          type="submit"
          className="bg-[#e57c35] text-white px-6 py-2 rounded-lg hover:bg-orange-700"
        >
          Submit Review
        </button>

        {message && <p className="text-center mt-2">{message}</p>}
      </form>

      
    </div>
  );
};

export default ReviewForm;