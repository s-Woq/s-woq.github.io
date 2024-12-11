import React, { useEffect, useState } from 'react';

function Weather() {
    const [cityData, setCityData] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const city = "Lima";
            const API_KEY = "7aa56e09e66c5fd3c6f591b313960b4d";

            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log(data); // Log the entire JSON response

                // Extracting latitude and longitude correctly
                const latitude = data.coord.lat; // Corrected path for latitude
                const longitude = data.coord.lon; // Corrected path for longitude

                setCityData({ city, latitude, longitude });
                setTemperature(data.main.temp); 
            } catch (error) {
                setError(error); 
            } finally {
                setLoading(false); 
            }
        };

        fetchWeather();
    }, []); 

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data: {error.message}</p>;

    return (
        <div className="grid place-items-center  font-mono text-wrap font-bold ">
            <h1>Current Temperature</h1>
            <p>City: {cityData.city}</p>
            <p>Latitude: {cityData.latitude}</p>
            <p>Longitude: {cityData.longitude}</p>
            <p>Temperature: {temperature} °C</p>
        </div>
    );
}

export default Weather;
