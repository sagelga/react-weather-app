import React from 'react'
import Dashboard from './Dashboard'
import TemperatureBody from './TemperatureBody'

// const API = {
//     // OpenWeatherMap API
//     weather: {
//         key: 'c4b0c4b0c4b0c4b0c4b0c4b0c4b0c4b0',
//         base: 'https://api.openweathermap.org/data/2.5/',
//     },
//     // Unsplash API
//     unsplash: {
//         key: 'c4b0c4b0c4b0c4b0c4b0c4b0c4b0c4b0',
//         base: 'https://api.unsplash.com/',
//     },
// }

// const cache = {}

// Get weather data from OpenWeatherMap API
// async function getWeatherData(location) {
//     // Check if location is in cache
//     if (cache[location]) {
//         console.log(cache[location])
//         return cache[location]
//     }

//     // Fetch data from OpenWeatherMap API
//     const response = await fetch(
//         `${API.weather.base}weather?q=${location}&units=metric&APPID=${API.weather.key}`
//     )
//     const data = await response.json()
//     cache[location] = data
//     console.log(data)
//     return data
// }

// Get Unsplash image from Unsplash API
// async function getUnsplashImage(location) {
//     // Check if location is in cache
//     if (cache[location]) {
//         console.log(cache[location])
//         return cache[location]
//     }

//     // Fetch data from Unsplash API
//     const response = await fetch(
//         `${API.unsplash.base}photos/random?query=${location}&client_id=${API.unsplash.key}`
//     )
//     const data = await response.json()
//     cache[location] = data
//     console.log(data)
//     return data
// }

function Body() {
    // const [weatherData, setWeatherData] = useState({});
    // const [unsplashData, setUnsplashData] = useState({});

    const location = 'Bangkok'

    // Get weather data from OpenWeatherMap API
    // const weatherData = getWeatherData(location)

    // Get Unsplash image from Unsplash API
    // const unsplashImage = getUnsplashImage(location)

    return (
        <div className="body">
            <TemperatureBody location={location} />
            <Dashboard />
        </div>
    )
}

export default Body
