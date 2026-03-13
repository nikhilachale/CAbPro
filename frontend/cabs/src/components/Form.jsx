import React, { useMemo, useState } from "react";
import { X } from "lucide-react";
import mini from "../images/optimized/mini-logo.webp";
import muv from "../images/optimized/muv-logo.webp";
import suv from "../images/optimized/suv-logo.webp";
import innova from "../images/optimized/innova-logo.webp";
import sedan from "../images/optimized/sedan-logo.webp";

const BOOKING_API_URL = import.meta.env.VITE_BOOKING_API_URL || "http://localhost:8080/api/booking";

const cabOptions = [
  { name: "SUV", image: suv },
  { name: "MUV", image: muv },
  { name: "Sedan", image: sedan },
  { name: "Innova", image: innova },
  { name: "Mini", image: mini },
];

const initialFormState = {
  fullName: "",
  mobileNumber: "",
  pickupLocation: "",
  dropLocation: "",
  pickupDate: "",
  pickupTime: "",
  passengers: "1",
  cabType: "",
};

const Form = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatusMessage("");
    setIsError(false);

    if (!/^\d{10}$/.test(formData.mobileNumber.trim())) {
      setIsError(true);
      setStatusMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    const payload = {
      customer_name: formData.fullName.trim(),
      phone: formData.mobileNumber.trim(),
      pickup: formData.pickupLocation.trim(),
      drop_location: formData.dropLocation.trim(),
      travel_date: formData.pickupDate,
      travel_time: formData.pickupTime,
      passengers: Number(formData.passengers),
      car_type: formData.cabType,
    };

    try {
      setSubmitting(true);

      const response = await fetch(BOOKING_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setIsError(true);
        setStatusMessage(data.message || "Unable to submit booking. Please try again.");
        return;
      }

      setStatusMessage(data.message || "Booking confirmed. Our team will contact you shortly.");
      setIsError(false);
      setFormData(initialFormState);

      if (onSuccess) {
        onSuccess(data);
      }
    } catch {
      setIsError(true);
      setStatusMessage("Network error. Please check connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="card-surface overflow-hidden">
      <div className="border-b border-slate-200 bg-slate-50/80 px-5 py-4 sm:px-6 sm:py-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">Book Your Ride</h2>
            <p className="mt-1 text-sm text-slate-600">Fill details and get instant booking confirmation.</p>
          </div>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-orange-300 hover:text-orange-700"
              aria-label="Close booking form"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 p-5 sm:p-6">
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

        <div className="grid gap-4 sm:grid-cols-2">
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
              inputMode="numeric"
              pattern="[0-9]{10}"
              maxLength={10}
              required
            />
          </div>
          <div>
            <label htmlFor="passengers" className="field-label">
              Passengers
            </label>
            <input
              id="passengers"
              type="number"
              min={1}
              max={12}
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              className="input-surface"
              required
            />
          </div>
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

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="pickupDate" className="field-label">
              Travel Date
            </label>
            <input
              id="pickupDate"
              type="date"
              min={minDate}
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              className="input-surface"
              required
            />
          </div>
          <div>
            <label htmlFor="pickupTime" className="field-label">
              Travel Time
            </label>
            <input
              id="pickupTime"
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              className="input-surface"
              required
            />
          </div>
        </div>

        <div>
          <p className="field-label">Type of Cab</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
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
                    className="sr-only"
                    required
                  />
                  <img
                    src={cab.image}
                    alt={cab.name}
                    width="40"
                    height="40"
                    loading="lazy"
                    decoding="async"
                    className="mx-auto h-10 w-10 object-contain"
                  />
                  <span className="mt-2 block text-sm font-semibold">{cab.name}</span>
                </label>
              );
            })}
          </div>
        </div>

        <button type="submit" disabled={submitting} className="btn-primary w-full rounded-xl py-3 text-base">
          {submitting ? "Submitting..." : "Request Booking"}
        </button>

        {statusMessage && (
          <p
            className={`rounded-lg border px-3 py-2 text-sm font-medium ${
              isError ? "border-rose-200 bg-rose-50 text-rose-700" : "border-emerald-200 bg-emerald-50 text-emerald-700"
            }`}
            aria-live="polite"
          >
            {statusMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
