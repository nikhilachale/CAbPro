import React, { useState, useEffect } from "react";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const API_URL= import.meta.env.BACKEND_URL ; 

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const formattedReviews = data.map((item) => ({
          name: item.name,
          rating: item.star,
          review: item.description,
        }));
        setReviews(formattedReviews);
      })
      .catch((error) => {
        console.error("Failed to fetch reviews:", error);
      });
  }, []);

  // Function to get a consistent color based on the first letter
  const getAvatarColor = (name) => {
    const colors = [
      'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-[#e57c35] ', 
      'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500',
      'bg-orange-500', 'bg-cyan-500'
    ];
    const firstLetter = name.charAt(0).toUpperCase();
    const index = firstLetter.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-6 sm:py-8 md:py-12 px-2 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-4">
            Customer <span className="text-[#e57c35] ">Reviews</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            See what our customers are saying about their experience with us
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-[#e57c35]  mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>

        {reviews.length === 0 ? (
          <div className="text-center py-12 sm:py-16 px-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.418 8-9.6 8-1.297 0-2.522-.244-3.656-.692L3 21l1.696-4.744C4.244 15.522 4 14.297 4 13c0-5.182 4.818-9.6 10-9.6s10 4.418 10 8.6z" />
              </svg>
            </div>
            <p className="text-lg sm:text-xl text-gray-500 font-medium">No reviews yet</p>
            <p className="text-sm sm:text-base text-gray-400 mt-2">Be the first to share your experience!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-5 md:p-6 border border-gray-100 hover:border-yellow-200 transform hover:-translate-y-1"
              >
                {/* User Avatar and Name */}
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ${getAvatarColor(review.name)} rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg md:text-xl shadow-md`}>
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="ml-2 sm:ml-3">
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg truncate">
                      {review.name}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm">Verified Customer</p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center justify-center mb-3 sm:mb-4 bg-gray-50 rounded-lg py-2 sm:py-3">
                  <div className="flex space-x-0.5 sm:space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          i < review.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium text-gray-600">
                    {review.rating}/5
                  </span>
                </div>

                {/* Review Text */}
                <div className="relative">
                  <svg className="absolute top-0 left-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-300 -translate-x-1 -translate-y-1" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757L16 20l-1.757-1.757C15.328 17.157 16 15.657 16 14c0-3.314-2.686-6-6-6zm12 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757L28 20l-1.757-1.757C27.328 17.157 28 15.657 28 14c0-3.314-2.686-6-6-6z"/>
                  </svg>
                  <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed pl-3 sm:pl-4 italic">
                    "{review.review}"
                  </p>
                </div>

                {/* Decorative Bottom Border */}
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="flex justify-center">
                    <div className="w-6 sm:w-8 md:w-10 h-0.5 sm:h-1 bg-gradient-to-r from-yellow-400 to-[#e57c35]  rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsList;