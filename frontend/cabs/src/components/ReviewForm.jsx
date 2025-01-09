import React, { useState } from "react";

const ReviewForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");  // Success/Error message

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
          setMessage("Review submitted successfully!");
          onSubmit(newReview);
          setName("");
          setReview("");
          setRating(0);
        } else {
          setMessage(data.msg || "Failed to submit review.");
        }
      } catch (error) {
        console.error("Error submitting review:", error);
        setMessage("Network error. Please try again.");
      }
    } else {
      setMessage("Please fill all fields and give a rating.");
    }
  };

  return (
    <div className="bg-blue-950 text-white w-11/12 max-w-6xl p-10 mb-4 rounded-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 text-center">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            className="w-4/5 text-black p-2 mt-2 rounded-lg mx-auto block"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="review" className="block text-gray-300 text-center">
            Your Review:
          </label>
          <textarea
            id="review"
            className="w-4/5 text-black p-2 mt-2 rounded-lg mx-auto block"
            placeholder="Enter your review"
            rows="4"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-center">Rating:</label>
          <div className="flex items-center justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                className={`cursor-pointer text-${
                  star <= rating ? "yellow" : "gray"
                }-400`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 px-4 py-2 text-white rounded-lg mx-auto block"
        >
          Submit Review
        </button>

        {message && (
          <p className="text-center mt-4">
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ReviewForm;