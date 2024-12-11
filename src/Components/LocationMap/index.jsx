import React, { useState, useEffect } from 'react';

const LocationFetcher = () => {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          setError(error.message);
        },
        {
          enableHighAccuracy: true, // Use high accuracy mode
          timeout: 5000, // Timeout for getting the location
          maximumAge: 0, // Do not use a cached position
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div>
      <h2>User Location</h2>
      {error && <p>Error: {error}</p>}
      {location.lat && location.lng ? (
        <p>Latitude: {location.lat}, Longitude: {location.lng}</p>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
};

export default LocationFetcher;
