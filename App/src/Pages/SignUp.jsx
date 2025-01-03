import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    eventDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    alert("Thank you for signing up!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form
        className="bg-white p-6 rounded shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="block w-full border p-2 mb-4 rounded"
          onChange={handleChange}
          required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="block w-full border p-2 mb-4 rounded"
            onChange={handleChange}
            required
          />
          <select
            name="eventType"
            className="block w-full border p-2 mb-4 rounded"
            onChange={handleChange}
            required
          >
            <option value="">Select Event Type</option>
            <option value="Wedding">Wedding</option>
            <option value="Meeting">Meeting</option>
            <option value="Celebration">Celebration</option>
          </select>
          <input
            type="date"
            name="eventDate"
            className="block w-full border p-2 mb-4 rounded"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      );
    };
    
    export default SignUp;
    