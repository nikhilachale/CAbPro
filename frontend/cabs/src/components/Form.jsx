import React, { useState } from "react";
import mini from "../images/mini logo.png";
import muv from "../images/muv logo.png";
import suv from "../images/suv logo.png";
import innova from "../images/innova logo.png";
import sedan from "../images/sedan logo.png";

const cabOptions = [
  { name: "SUV", image: suv },
  { name: "MUV", image: muv },
  { name: "Sedan", image: sedan },
  { name: "Innova", image: innova },
  { name: "Mini", image: mini },
];

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    pickupLocation: "",
    dropLocation: "",
    pickupDate: "",
    cabType: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      window.alert("Booking request submitted. Our team will call you shortly.");
    }, 1000);
  };

  return (
    <div className="card-surface overflow-hidden">
      <div className="border-b border-slate-200 bg-slate-50/80 px-6 py-5">
        <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">Book Your Ride</h2>
        <p className="mt-1 text-sm text-slate-600">Fill in the details and get a quick confirmation call.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 p-6">
        <div>
          <label htmlFor="fullName" className="field-label">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="input-surface"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label htmlFor="mobileNumber" className="field-label">
            Mobile Number
          </label>
          <input
            id="mobileNumber"
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="input-surface"
            placeholder="10-digit mobile number"
            required
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="pickupLocation" className="field-label">
              Pickup Location
            </label>
            <input
              id="pickupLocation"
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              className="input-surface"
              placeholder="Pickup address"
              required
            />
          </div>
          <div>
            <label htmlFor="dropLocation" className="field-label">
              Drop Location
            </label>
            <input
              id="dropLocation"
              type="text"
              name="dropLocation"
              value={formData.dropLocation}
              onChange={handleChange}
              className="input-surface"
              placeholder="Drop address"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="pickupDate" className="field-label">
            Pickup Date
          </label>
          <input
            id="pickupDate"
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            className="input-surface"
            required
          />
        </div>

        <div>
          <p className="field-label">Type of Cab</p>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
            {cabOptions.map((cab) => {
              const selected = formData.cabType === cab.name;
              return (
                <label
                  key={cab.name}
                  className={`cursor-pointer rounded-xl border p-3 text-center transition-all duration-200 ${
                    selected
                      ? "border-orange-400 bg-orange-50 text-orange-700"
                      : "border-slate-200 bg-white hover:border-orange-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="cabType"
                    value={cab.name}
                    checked={selected}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <img src={cab.image} alt={cab.name} className="mx-auto h-10 w-10 object-contain" />
                  <span className="mt-2 block text-xs font-semibold sm:text-sm">{cab.name}</span>
                </label>
              );
            })}
          </div>
        </div>

        <button type="submit" disabled={submitting} className="btn-primary w-full rounded-xl py-3 text-base">
          {submitting ? "Submitting..." : "Request Booking"}
        </button>
      </form>
    </div>
  );
};

export default Form;
