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

    const inputClasses = "peer w-full px-4 pt-6 pb-2 text-sm text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all";
    const labelClasses = "absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1";

    return (
        <form onSubmit={handleSubmit} className="space-y-6 relative">
            {[
                { label: "Full Name", type: "text", name: "fullName" },
                { label: "Mobile Number", type: "tel", name: "mobileNumber" },
                { label: "Pickup Location", type: "text", name: "pickupLocation" },
                { label: "Drop Location", type: "text", name: "dropLocation" },
                { label: "Pickup Date", type: "date", name: "pickupDate" },
            ].map(({ label, type, name }) => (
                <div key={name} className="relative">
                    <input
                        type={type}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        placeholder=" "
                        required
                        className={inputClasses}
                    />
                    <label className={labelClasses}>{label}</label>
                </div>
            ))}

            {/* Cab Type Selection with Images */}
            <div>
                <label className="block mb-2 text-sm text-gray-600 font-medium">Type of Cab:</label>
                <div className="grid grid-cols-3 gap-4">
                    {cabOptions.map((cab) => (
                        <label
                            key={cab.name}
                            className={`cursor-pointer border rounded-lg p-2 flex flex-col items-center justify-center transition-all duration-200 ${formData.cabType === cab.name
                                    ? "border-blue-700 bg-blue-50"
                                    : "border-gray-300"
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
                            <img src={cab.image} alt={cab.name} className="w-10 h-10 object-contain mb-2" />
                            <span className="text-sm font-medium text-gray-700">{cab.name}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={submitting}
                className={`w-full bg-blue-900 text-white py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${submitting ? "opacity-70 cursor-not-allowed" : ""}`}
            >
                {submitting ? "Submitting..." : "Submit"}
            </button>
        </form>
    );
};

export default Form;