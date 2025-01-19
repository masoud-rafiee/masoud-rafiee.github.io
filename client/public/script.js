// Function to fetch and display the current weather
async function loadWeather() {
    const weatherElement = document.getElementById('weather');
    try {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;

            // Fetch weather data from OpenWeatherMap
            const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
            );
            const data = await response.json();

            // Update the weather element with fetched data
            weatherElement.innerHTML = `
                <h2>Weather</h2>
                <p>Location: ${data.name}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Condition: ${data.weather[0].description}</p>
            `;
        });
    } catch (error) {
        weatherElement.innerHTML = `<p>Error fetching weather data</p>`;
        console.error('Weather Error:', error);
    }
}

// Function to display current date and time based on the user's location
function loadDateTime() {
    const datetimeElement = document.getElementById('datetime');
    setInterval(() => {
        const now = new Date();
        datetimeElement.innerHTML = `
            <h2>Date & Time</h2>
            <p>${now.toLocaleString()}</p>
        `;
    }, 1000);
}

// Function to simulate "Programmers Born" and "Programmers Died" statistics
function simulateProgrammerStats() {
    const bornCounter = document.getElementById('born-counter');
    const diedCounter = document.getElementById('died-counter');

    let bornCount = 0;
    let diedCount = 0;

    setInterval(() => {
        bornCount += Math.floor(Math.random() * 5); // Random increment
        diedCount += Math.floor(Math.random() * 3); // Random increment
        bornCounter.textContent = bornCount;
        diedCounter.textContent = diedCount;
    }, 1000); // Update every second
}

// Initialize Google Maps Geolocation API
function loadGoogleMap() {
    const mapElement = document.createElement('div');
    mapElement.id = 'map';
    mapElement.style.height = '300px';
    document.body.appendChild(mapElement);

    const map = new google.maps.Map(mapElement, {
        center: { lat: 0, lng: 0 },
        zoom: 2,
    });

    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const userLocation = new google.maps.LatLng(latitude, longitude);
        map.setCenter(userLocation);

        new google.maps.Marker({
            position: userLocation,
            map: map,
            title: 'Your Location',
        });
    });
}

// Initialize all functionalities when the page loads
window.onload = function () {
    loadWeather();
    loadDateTime();
    simulateProgrammerStats();
};


$(document).ready(function () {
    console.log("jQuery is loaded!");
    $('#content').html('<p>Hello, this is a test using jQuery!</p>');
});

