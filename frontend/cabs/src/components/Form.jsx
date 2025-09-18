import React, { useState } from 'react';

import mini from "../images/mini logo.png";
import muv from "../images/muv logo.png";
import suv from "../images/suv logo.png";
import innova from "../images/innova logo.png";
import sedan from "../images/sedan logo.png";

const cabOptions = [
  { name: 'SUV', image: suv },
  { name: 'MUV', image: muv },
  { name: 'Sedan', image: sedan },
  { name: 'Innova', image: innova },
  { name: 'Mini', image: mini },
];

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    pickupLocation: '',
    dropLocation: '',
    pickupDate: '',
    cabType: '',
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    console.log('Form Data Submitted:', formData);
    setTimeout(() => {
      setSubmitting(false);
      alert("Form submitted successfully!");
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl mt-4 shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Your Ride</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e57c35] focus:border-transparent"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e57c35] focus:border-transparent"
            />
          </div>

          {/* Pickup and Drop Location in one line */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
              <input
                type="text"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e57c35] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Drop Location</label>
              <input
                type="text"
                name="dropLocation"
                value={formData.dropLocation}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e57c35] focus:border-transparent"
              />
            </div>
          </div>

          {/* Pickup Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Date</label>
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e57c35] focus:border-transparent"
            />
          </div>

          {/* Cab Type Selection with Images */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type of Cab</label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {cabOptions.map((cab) => (
                <label
                  key={cab.name}
                  className={`cursor-pointer border rounded-lg p-3 flex flex-col items-center justify-center transition-all duration-200 ${
                    formData.cabType === cab.name
                      ? "bg-[#e57c35] border-[#e57c35] text-gray-900 shadow-sm"
                      : "border-gray-300 hover:border-orange-400"
                  }`}
                >
                  <input
                    type="radio"
                    name="cabType"
                    value={cab.name}
                    checked={formData.cabType === cab.name}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <img
                    src={cab.image}
                    alt={cab.name}
                    className="w-10 h-10 object-contain mb-2"
                  />
                  <span className="text-sm font-medium">{cab.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className={`w-full bg-[#e57c35] hover:bg-orange-400 text-gray-900 font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 ${
              submitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;