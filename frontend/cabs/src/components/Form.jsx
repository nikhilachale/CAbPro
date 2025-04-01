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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-5xl w-96
             mx-auto bg-white p-8 mb-4 rounded-lg shadow-lg space-y-6"
        >
            <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name:</label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2">Mobile Number:</label>
                <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2">Pickup Location:</label>
                <input
                    type="text"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2">Drop Location:</label>
                <input
                    type="text"
                    name="dropLocation"
                    value={formData.dropLocation}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2">Pickup Date:</label>
                <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2">Type of Cab:</label>
                <select
                    name="cabType"
                    value={formData.cabType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                >
                    <option value="">Select Cab Type</option>
                    <option value="SUV">SUV</option>
                    <option value="MUV">MUV</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Innova">Innova</option>
                    <option value="Mini">Mini</option>
                </select>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Submit
            </button>
        </form>
    );
};

export default Form;
