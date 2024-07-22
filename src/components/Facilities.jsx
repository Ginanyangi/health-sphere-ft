import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Facilities = () => {
  const [facilities, setFacilities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/facilities/');
        setFacilities(response.data);
      } catch (error) {
        console.error('Error fetching facilities:', error);
        setError('Error fetching facilities.');
      }
    };

    fetchFacilities();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Healthcare Facilities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {facilities.map((facility) => (
          <div key={facility.id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-2">{facility.name}</h3>
            <p className="text-gray-700 mb-2"><strong>Type:</strong> {facility.type}</p>
            <p className="text-gray-700 mb-2"><strong>Address:</strong> {facility.address}</p>
            <p className="text-gray-700 mb-2"><strong>Phone:</strong> {facility.phone_number}</p>
            <p className="text-gray-700 mb-2"><strong>Email:</strong> {facility.email}</p>
            <a href={`https://www.google.com/maps?q=${facility.latitude},${facility.longitude}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View on Map
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
