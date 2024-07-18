import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 1.2921,
  lng: 36.8219
};

const PlacesMap = () => {
  const [places, setPlaces] = useState([]);
  
  useEffect(() => {
    const fetchPlaces = async () => {
      const location = new window.google.maps.LatLng(center.lat, center.lng);
      const map = new window.google.maps.Map(document.createElement('div'), {
        center: location,
        zoom: 15
      });
      const service = new window.google.maps.places.PlacesService(map);
      const request = {
        location: location,
        radius: '5000',
        type: ['hospital', 'pharmacy']
      };
      
      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setPlaces(results);
        }
      });
    };

    fetchPlaces();
  }, []);

  return (
    <LoadScript googleMapsApiKey= {config("GOOGLE_API_KEY")} libraries={['places']}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {places.map(place => (
          <Marker
            key={place.place_id}
            position={{ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }}
            title={place.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default PlacesMap;
