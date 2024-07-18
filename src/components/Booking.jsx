import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [facility, setFacility] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/bookings/', {
        facility,
        appointment_time: appointmentTime,
        reason,
      }, {
        headers: {
          Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`, // Replace with the actual token
        }
      });
      console.log('Booking successful:', response.data);
    } catch (error) {
      console.error('Error booking:', error.response?.data || error.message);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96 mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-500">Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Facility</label>
          <input
            type="text"
            value={facility}
            onChange={(e) => setFacility(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Appointment Time</label>
          <input
            type="datetime-local"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Reason</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Book</button>
      </form>
    </div>
  );
};

export default BookingForm;
