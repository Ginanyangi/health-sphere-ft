import React, { useState } from 'react';
import axios from 'axios';

const FacilitySearch = () => {
  const [query, setQuery] = useState('');
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const apiKey = process.env.GOOGLE_API_KEY;
    const location = '1.2921,36.8219'; // Default location if no query provided
    const radius = '5000';
    const type = ['hospital','pharmacy','clinic'];

    try {
      const results = await Promise.all(
        types.map(async (type) => {
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json`, {
              params: {
                location,
                radius,
                type,
                keyword: query,
                key: apiKey
              }
            }
          );
          if (response.data.status === 'OK') {
            return response.data.results;
          } else {
            throw new Error(response.data.status);
          }
        })
      );
      setPlaces(results.flat());
    } catch (error) {
      setError('Error fetching places. Please try again later.');
      console.error('Error fetching places:', error);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search for Healthcare Facilities</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter location or facility name"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded mt-2"
        >
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      <ul>
        {places.map((place) => (
          <li key={place.place_id} className="p-4 border-b">
            <h2 className="text-xl font-semibold">{place.name}</h2>
            <p>{place.vicinity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacilitySearch;
