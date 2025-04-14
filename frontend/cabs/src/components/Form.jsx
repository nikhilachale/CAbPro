import React, { useState } from 'react';

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
        // simulate submission delay
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

            {/* Cab Type Dropdown */}
            <div className="relative">
                <select
                    name="cabType"
                    value={formData.cabType}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                >
                    <option value="" disabled hidden>Select Cab Type</option>
                    <option value="SUV">SUV</option>
                    <option value="MUV">MUV</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Innova">Innova</option>
                    <option value="Mini">Mini</option>
                </select>
                <label className={labelClasses}>Type of Cab</label>
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