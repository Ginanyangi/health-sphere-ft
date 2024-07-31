import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BASE_URL from '../../config';


const FacilityManagement = () => {
  const [facilities, setFacilities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/facilities/`);
        console.log('Response:', response); 
        setFacilities(response.data);
      } catch (error) {
        console.error('Error fetching facilities:', error);
        setError('Error fetching facilities.');
      }
    };

    fetchFacilities();
  }, []);

  const handleDelete = async (facilityId) => {
    try {
      await axios.delete(`${BASE_URL}/api/facilities/${facilityId}/`);
      // Update the state after successful deletion
      setFacilities(prevFacilities => prevFacilities.filter(f => f.id !== facilityId));
    } catch (error) {
      console.error('Error deleting facility:', error);
      setError('Error deleting facility.');
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-xl font-semibold mb-4 text-gray-900">Facility Management</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Address</th>
            <th className="py-3 px-6 text-left">Phone Number</th>
            <th className="py-3 px-6 text-center">Facility Type</th>
            <th className="py-3 px-6 text-left">Open 24/7</th>
            <th className="py-3 px-6 text-left">Opening Time</th>
            <th className="py-3 px-6 text-left">Closing Time</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {facilities.map(facility => (
            <tr key={facility.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">{facility.name}</td>
              <td className="py-3 px-6 text-left">{facility.address}</td>
              <td className="py-3 px-6 text-left">{facility.phone_number}</td>
              <td className="py-3 px-6 text-left">{facility.facility_type}</td>
              <td className="py-3 px-6 text-left">{facility.open24_7 ? 'Yes' : 'No'}</td>
              <td className="py-3 px-6 text-left">{facility.opening_time}</td>
              <td className="py-3 px-6 text-left">{facility.closing_time}</td>
              <td className="py-3 px-6 text-center">
                <button
                  onClick={() => handleDelete(facility.id)}
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

export default FacilityManagement;
