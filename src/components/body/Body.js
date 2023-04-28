const API = {
    // OpenWeatherMap API
    weather: {
        key: 'c4b0c4b0c4b0c4b0c4b0c4b0c4b0c4b0',
        base: 'https://api.openweathermap.org/data/2.5/',
    },
    // Unsplash API
    unsplash: {
        key: 'c4b0c4b0c4b0c4b0c4b0c4b0c4b0c4b0',
        base: 'https://api.unsplash.com/',
    },
};

const cache = {};

// Get weather data from OpenWeatherMap API
async function getWeatherData(location) {
    // Check if location is in cache
    if (cache[location]) {
        console.log(cache[location]);
        return cache[location];
    }

    // Fetch data from OpenWeatherMap API
    const response = await fetch(
        `${API.weather.base}weather?q=${location}&units=metric&APPID=${API.weather.key}`
    );
    const data = await response.json();
    cache[location] = data;
    console.log(data);
    return data;
}

// Get Unsplash image from Unsplash API
async function getUnsplashImage(location) {
    // Check if location is in cache
    if (cache[location]) {
        console.log(cache[location]);
        return cache[location];
    }

    // Fetch data from Unsplash API
    const response = await fetch(
        `${API.unsplash.base}photos/random?query=${location}&client_id=${API.unsplash.key}`
    );
    const data = await response.json();
    cache[location] = data;
    console.log(data);
    return data;
}

function Body() {
    // const [weatherData, setWeatherData] = useState({});
    // const [unsplashData, setUnsplashData] = useState({});

    const location = 'Bangkok';

    // Get weather data from OpenWeatherMap API
    getWeatherData(location);

    // Get Unsplash image from Unsplash API
    getUnsplashImage(location);

    return (
        <div className="body">
            {/* shows the basic information */}
            <h1 class="city">in {location}, it's</h1>
            <h2 class="current-temp">40 C°</h2>
            <h2 class="feelsLike-temp">Feels like 40 C°</h2>

            {/* shows the image of the location */}
            <img
                src="https://source.unsplash.com/1600x900/?{location}"
                alt="{location}"
            />
        </div>
    );
}
export default Body;
