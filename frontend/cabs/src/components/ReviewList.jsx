import React, { useState, useEffect } from "react";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);

  // Fetch reviews on component mount
  useEffect(() => {
    fetch("http://localhost:3000/rev")
      .then((res) => res.json())
      .then((data) => {
        // Map API fields to component fields
        const formattedReviews = data.map((item) => ({
          name: item.title,             // title -> name
          rating: item.star,            // star -> rating
          review: item.description,     // description -> review
        }));
        setReviews(formattedReviews);
      })
      .catch((error) => {
        console.error("Failed to fetch reviews:", error);
      });
  }, []);

  return (
    <div className="bg-blue-950 mb-4 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
      {reviews.length === 0 ? (
        <p className="text-gray-300">No reviews yet.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {reviews.map((review, index) => (
            <li
              key={index}
              className="bg-white flex flex-col justify-between p-4 border border-gray-300 rounded-lg"
              style={{ height: "220px", width: "220px" }}
            >
              {/* Name */}
              <div className="text-blue-900 font-semibold mb-2">
                {review.name}
              </div>

              {/* Star Rating */}
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < review.rating ? "text-yellow-500" : "text-gray-400"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review Description */}
              <p className="text-gray-900 text-sm mt-2 text-center">
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