import React from "react";
import { Star } from "lucide-react";

const getAvatarColor = (name = "A") => {
  const colors = [
    "bg-orange-500",
    "bg-sky-500",
    "bg-emerald-500",
    "bg-rose-500",
    "bg-indigo-500",
    "bg-amber-500",
  ];
  const letter = name.charAt(0).toUpperCase();
  const index = letter.charCodeAt(0) % colors.length;
  return colors[index];
};

const normalizeReview = (review) => ({
  name: review.name || "Anonymous",
  review: review.review || review.description || "",
  rating: Number(review.rating ?? review.star ?? 0),
});

const ReviewList = ({ reviews = [], loading = false, error = "" }) => {
  if (loading) {
    return <p className="text-center text-sm text-slate-500">Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-center text-sm text-red-600">{error}</p>;
  }

  const normalized = reviews.map(normalizeReview);

  if (!normalized.length) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <p className="text-base font-semibold text-slate-700">No reviews yet</p>
        <p className="mt-1 text-sm text-slate-500">Be the first to share your experience.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {normalized.map((item, idx) => (
        <article key={`${item.name}-${idx}`} className="card-surface p-5 hover:-translate-y-1 hover:border-orange-200">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white ${getAvatarColor(
                item.name
              )}`}
            >
              {item.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 sm:text-base">{item.name}</h3>
              <p className="text-xs text-slate-500">Verified rider</p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, starIdx) => (
              <Star
                key={`star-${starIdx}`}
                className={`h-4 w-4 ${starIdx < item.rating ? "text-orange-500" : "text-slate-300"}`}
                fill={starIdx < item.rating ? "currentColor" : "none"}
              />
            ))}
            <span className="ml-1 text-xs font-semibold text-slate-500">{item.rating}/5</span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-slate-600">"{item.review}"</p>
        </article>
      ))}
    </div>
  );
};

export default ReviewList;
