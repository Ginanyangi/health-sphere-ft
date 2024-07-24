import React from 'react';


const Home = () => {
  return (
    <div className="bg-bg p-8 rounded-lg shadow-lg max-w-xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-primary mb-6">Welcome to HealthSphere</h1>
      <p className="text-secondaryText mb-6">
        HealthSphere is your go-to solution for managing healthcare facilities, booking appointments, and handling prescriptions. Our platform provides a seamless and efficient way to ensure you get the best healthcare services.
      </p>
      <h2 className="text-2xl font-bold text-primary mb-4">Features:</h2>
      <ul className="list-disc list-inside text-secondaryText mb-6">
        <li className="pl-2">Manage healthcare facilities</li>
        <li className="pl-2">Book appointments</li>
        <li className="pl-2">Handle prescriptions</li>
        <li className="pl-2">24/7 support</li>
      </ul>
      <p className="text-secondaryText">
        Thank you for choosing HealthSphere. We're committed to providing you with the best healthcare experience.
      </p>
    </div>
  );
};

export default Home;
