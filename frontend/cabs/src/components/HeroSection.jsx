import Form from "./Form";
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';





const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-12 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/40 to-yellow-50 z-10"></div>
        
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-black space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Your Ride, <span className="text-yellow-500">Your Way</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 2}}
              className="text-lg md:text-xl text-gray-900 max-w-lg"
            >
              Book a reliable and comfortable ride in minutes. Available 24/7, anywhere in the city.
            </motion.p>
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 2 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
              <motion.button
                
                whileHover={{ scale: 1.1, boxShadow: '0px 0px 12px rgba(234,179,8,0.6)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg"
              >
                🚖 Book a Ride
              </motion.button>
              
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 2.4 }}
              className="flex items-center space-x-4 pt-6"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`}
                    alt="Customer"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-900">4.9 from 2,300+ reviews</p>
              </div>
            </motion.div>
          </div>

          <div className="md:block">
            {/* <BookingForm /> */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 2 }}
            >
              <Form />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;