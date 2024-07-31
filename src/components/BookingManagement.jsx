import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../../config';


const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/bookings/`);
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setError('Error fetching bookings.');
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">Booking Management</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm leading-normal">
              <th className="py-3 px-6 text-left">Booking ID</th>
              <th className="py-3 px-6 text-left">Appointment Time</th>
              <th className="py-3 px-6 text-left">Reason</th>
              <th className="py-3 px-6 text-left">User ID</th>
              <th className="py-3 px-6 text-left">Facility ID</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{booking.id}</td>
                <td className="py-3 px-6 text-left">{booking.appointment_time}</td>
                <td className="py-3 px-6 text-left">{booking.reason}</td>
                <td className="py-3 px-6 text-left">{booking.user_id}</td>
                <td className="py-3 px-6 text-left">{booking.facility_id}</td>
                
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => handleDelete(booking.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingManagement;
