import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ananya Sharma",
      location: "Delhi",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
      comment:
        "TheCabBro service is extremely reliable and affordable. Booking a cab even in peak hours has never been this easy. Highly recommended!",
    },
    {
      id: 2,
      name: "Raj Patel",
      location: "Ahmedabad",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
      rating: 4,
      comment:
        "Smooth booking process, polite drivers, and very clean vehicles. The app interface is simple and user-friendly. Great job by the team!",
    },
    {
      id: 3,
      name: "Meera Nair",
      location: "Kochi",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 5,
      comment:
        "I travel frequently and TheCabBro has become my go-to app. Fixed pricing, no hidden charges, and safe rides always.",
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Jaipur",
      image: "https://randomuser.me/api/portraits/men/64.jpg",
      rating: 5,
      comment:
        "Professional drivers, quick customer support, and timely service. TheCabBro truly raises the bar for cab services in India.",
    },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
 const navigate = useNavigate();
 const handleAddReviewClick = () => {
  
 
    navigate('/reviews');
 
};

  const nextTestimonial = () => {
    setCurrentIdx((prevIdx) => (prevIdx + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIdx((prevIdx) => (prevIdx - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat"
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-yellow-500">Riders Say</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it – hear from our satisfied customers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial cards */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIdx * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-700">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-yellow-500"
                      />
                      <div>
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-400">{testimonial.location}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-600'}`}
                              fill={i < testimonial.rating ? 'currentColor' : 'none'}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 italic">"{testimonial.comment}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-3">
            <button
              onClick={prevTestimonial}
              className="bg-gray-800 text-white p-3 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${currentIdx === idx ? 'bg-yellow-500' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="bg-gray-800 text-white p-3 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
  <button
    onClick={handleAddReviewClick}
    className="bg-white text-yellow-500 text-2xl font-semibold py-2 px-5 rounded-lg shadow-md transition-colors duration-200"
  >
    Add Your Reviews
  </button>
</div>

      </div>
     

    </section>
  );
};

export default Testimonial;