import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const accessToken = localStorage.getItem('authToken'); // Assuming token is stored in localStorage
      const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
      await axios.post('http://localhost:8000/api/accounts/contact/', formData, { headers });
      setResponseMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form data
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setResponseMessage('Unauthorized. Please login or refresh your token.');
      } else {
        setResponseMessage('Failed to send message. Please try again.');
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-10 rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200"
        >
          Send
        </button>
      </form>
      {responseMessage && <p className="mt-4 text-center text-gray-700">{responseMessage}</p>}
    </div>
  );
};

export default ContactForm;