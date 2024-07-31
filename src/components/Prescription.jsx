import React, { useState } from 'react';
import axios from 'axios';

import BASE_URL from '../../config';



const PrescriptionForm = () => {
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/api/prescriptions/`, {
        medication,
        dosage,
        frequency,
      }, {
        headers: {
          Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`, // Replace with the actual token
        }
      });
      console.log('Prescription successful:', response.data);
    } catch (error) {
      console.error('Error creating prescription:', error.response?.data || error.message);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96 mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-500">Add Prescription</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Medication</label>
          <input
            type="text"
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Dosage</label>
          <input
            type="text"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Frequency</label>
          <input
            type="text"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Add</button>
      </form>
    </div>
  );
};

export default PrescriptionForm;
