import React, { useState, useEffect } from "react";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/rev")
      .then((res) => res.json())
      .then((data) => {
        const formattedReviews = data.map((item) => ({
          name: item.title,
          rating: item.star,
          review: item.description,
        }));
        setReviews(formattedReviews);
      })
      .catch((error) => {
        console.error("Failed to fetch reviews:", error);
      });
  }, []);

  return (
    <div className="mb-8 p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-neutral-800">
        Customer Reviews
      </h2>

      {reviews.length === 0 ? (
        <p className="text-center text-neutral-500">No reviews yet.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <li
              key={index}
              className="bg-white border border-neutral-200 rounded-xl shadow-md p-4 transition-transform hover:scale-[1.02] flex flex-col justify-between"
              style={{ height: "220px", width: "100%" }}
            >
              {/* Reviewer Name */}
              <div className="text-lg font-semibold text-neutral-900 text-center">
                {review.name}
              </div>

              {/* Star Rating */}
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < review.rating ? "text-amber-500" : "text-neutral-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review Description */}
              <p className="text-sm text-neutral-700 text-center mt-4 px-1">
                {review.review}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewsList;