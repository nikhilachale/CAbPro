import React, { useState } from "react";

const ReviewForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && review && rating > 0) {
      const newReview = { name, description: review, star: rating };

      try {
        const res = await fetch("http://localhost:3000/rev", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newReview),
        });

        const data = await res.json();

        if (res.ok) {
          setMessage("✅ Review submitted successfully!");
          onSubmit(newReview);
          setName("");
          setReview("");
          setRating(0);
        } else {
          setMessage(data.msg || "❌ Failed to submit review.");
        }
      } catch (error) {
        console.error("Error submitting review:", error);
        setMessage("⚠️ Network error. Please try again.");
      }
    } else {
      setMessage("⚠️ Please fill all fields and give a rating.");
    }
  };

  return (
    <div className="bg-white text-neutral-900 w-full max-w-3xl p-8 rounded-xl shadow-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-500">
        Write a Review
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Review */}
        <div>
          <label htmlFor="review" className="block font-medium mb-1">
            Your Review
          </label>
          <textarea
            id="review"
            rows="4"
            className="w-full border border-neutral-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Write your thoughts here..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block font-medium mb-2">Rating</label>
          <div className="flex space-x-2 justify-start">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                className={`cursor-pointer text-3xl transition-colors ${
                  star <= rating ? "text-amber-500" : "text-neutral-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-semibold"
        >
          Submit Review
        </button>

        {/* Message */}
        {message && (
          <p className="text-center text-sm mt-4 text-neutral-700">
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ReviewForm;