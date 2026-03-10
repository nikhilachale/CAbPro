import React, { useState } from "react";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/rev";

const ReviewForm = ({ onReviewAdded }) => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !review.trim() || rating === 0) {
      setMessage("Please complete all fields and select a rating.");
      return;
    }

    const payload = {
      name: name.trim(),
      description: review.trim(),
      star: rating,
    };

    try {
      setSubmitting(true);
      setMessage("");

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setMessage(data.msg || "Failed to submit review. Please try again.");
        return;
      }

      setMessage(data.msg || "Review submitted successfully.");
      setName("");
      setReview("");
      setRating(0);

      if (onReviewAdded) {
        onReviewAdded(payload);
      }
    } catch {
      setMessage("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="reviewerName" className="field-label">
          Your Name
        </label>
        <input
          id="reviewerName"
          type="text"
          className="input-surface"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="reviewDescription" className="field-label">
          Your Experience
        </label>
        <textarea
          id="reviewDescription"
          className="input-surface min-h-28 resize-y"
          placeholder="Tell us about your ride"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </div>

      <div>
        <p className="field-label">Rating</p>
        <div className="flex flex-wrap items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className={`text-2xl leading-none transition ${
                star <= rating ? "text-orange-500" : "text-slate-300 hover:text-slate-400"
              }`}
              aria-label={`Rate ${star} star`}
            >
              ★
            </button>
          ))}
          {rating > 0 && <span className="text-sm font-medium text-slate-600">{rating}/5</span>}
        </div>
      </div>

      <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto">
        {submitting ? "Submitting..." : "Submit Review"}
      </button>

      {message && (
        <p className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">{message}</p>
      )}
    </form>
  );
};

export default ReviewForm;
