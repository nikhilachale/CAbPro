import React from "react";
import { Link } from "react-router-dom";  // Import Link for navigation

const testimonials = [
  {
    id: 1,
    name: "Rohan Sharma",
    review: "This product is amazing! Highly recommend it.",
    rating: 5,
  },
  {
    id: 2,
    name: "Naman Gupta",
    review: "Excellent service and great quality. Will buy again.",
    rating: 5,
  },
  {
    id: 3,
    name: "Riya Singh",
    review: "Good experience overall, but room for improvement.",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <div className="bg-blue-950 text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">What Our Clients Say</h2>
      
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg w-80 shadow-lg">
            <p className="text-xl text-blue-900 font-semibold">{item.name}</p>
            
            <div className="flex mt-2 mb-4">
              {Array.from({ length: 5 }, (_, index) => (
                <span key={index} className={`text-yellow-400 ${index < item.rating ? "opacity-100" : "opacity-30"}`}>
                  ★
                </span>
              ))}
            </div>

            <p className="text-blue-500">{item.review}</p>
          </div>
        ))}
      </div>

      {/* More Reviews Button */}
      <div className="flex justify-center mt-12">
        <Link to="/reviews">
          <button className="bg-white px-6 py-3 text-blue-900 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">
            More Reviews
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Testimonial;