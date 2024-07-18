import React from 'react';

const Home = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 className="text-3xl font-bold mb-6">Welcome to HealthSphere</h1>
      <p className="text-gray-700 mb-4">
        HealthSphere is your go-to solution for managing healthcare facilities, booking appointments, and handling prescriptions. Our platform provides a seamless and efficient way to ensure you get the best healthcare services.
      </p>
      <h2 className="text-2xl font-bold mb-4">Features:</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Manage healthcare facilities</li>
        <li>Book appointments</li>
        <li>Handle prescriptions</li>
        <li>24/7 support</li>
      </ul>
      <p className="text-gray-700">
        Thank you for choosing HealthSphere. We're committed to providing you with the best healthcare experience.
      </p>
    </div>
  );
};

export default Home;
