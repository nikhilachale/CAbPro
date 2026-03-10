import React, { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/rev";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Unable to load reviews.");
        }

        const data = await response.json();
        setReviews(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message || "Unable to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handleReviewAdded = (newReview) => {
    setReviews((prev) => [newReview, ...prev]);
    setShowForm(false);
  };

  return (
    <section className="page-section pt-28 md:pt-32">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Customer voices</span>
          <h1 className="section-title">Reviews from our riders</h1>
          <p className="section-subtitle mx-auto">
            Read genuine feedback and share your experience with TheCabBro.
          </p>
          <button type="button" onClick={() => setShowForm((prev) => !prev)} className="btn-primary mt-6">
            {showForm ? "Close Form" : "Add Your Review"}
          </button>
        </div>

        {showForm && (
          <div className="mx-auto mt-8 max-w-3xl card-surface p-5 sm:p-6">
            <h2 className="text-xl font-extrabold text-slate-900">Write a Review</h2>
            <p className="mt-1 text-sm text-slate-600">Your feedback helps us improve service quality.</p>
            <div className="mt-5">
              <ReviewForm onReviewAdded={handleReviewAdded} />
            </div>
          </div>
        )}

        <div className="mt-8">
          <ReviewList reviews={reviews} loading={loading} error={error} />
        </div>
      </div>
    </section>
  );
};

export default ReviewsPage;
