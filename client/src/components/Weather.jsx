import React, { useEffect, useState } from 'react';

function Weather() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=YOUR_API_KEY`
            );
            const data = await response.json();
            setWeather(data);
        });
    }, []);

    return weather ? (
        <div className="weather">
            <h2>Weather</h2>
            <p>{weather.name}</p>
            <p>{Math.round(weather.main.temp - 273.15)}°C</p>
        </div>
    ) : (
        <p>Loading weather...</p>
    );
}

export default Weather;
