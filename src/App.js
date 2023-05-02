import React from 'react'
import { useState, useEffect } from 'react'

// CSS
import './App.css'

// Components
import Announcement from './components/header/Announcement'
import Searchbox from './components/header/Searchbox'
import TemperatureBody from './components/body/TemperatureBody'
import Dashboard from './components/body/Dashboard'
import Footer from './components/footer/Footer'

const API = {
    // OpenWeatherMap API
    weather: {
        key: '1bd8a19c06ea193a3d3915edee0edd9c',
        base: 'https://api.openweathermap.org/data/2.5/weather',
    },
}

// Get weather data from OpenWeatherMap API by search query
// async function getWeatherData(location) {
//     // Check if location is in cache
//     if (cache[location]) {
//         console.log(cache[location])
//         return cache[location]
//     }

//     // Fetch data from OpenWeatherMap API
//     const response = await fetch(
//         `${API.weather.base}?q=${location}&units=metric&APPID=${API.weather.key}`
//     )
//     const data = await response.json()

//     // Store data to cache
//     cache[location] = data
//     console.log(data)

//     // setWeatherData = data

//     return data
// }

// Main App
function App() {
    // Create a dummy data before fetching data from OpenWeatherMap API
    const initialWeatherState = {
        coord: { lon: 0, lat: 0 },
        weather: [{ id: 0, main: 'N/A', description: 'N/A', icon: '' }],
        base: '',
        main: {
            temp: 0,
            feels_like: 0,
            temp_min: 0,
            temp_max: 0,
            pressure: 0,
            humidity: 0,
            sea_level: 0,
            grnd_level: 0,
        },
        visibility: 0,
        wind: { speed: 0, deg: 0, gust: 0 },
        clouds: { all: 0 },
        dt: 0,
        sys: {
            type: 0,
            id: 0,
            country: '',
            sunrise: 0,
            sunset: 0,
        },
        timezone: 0,
        id: 0,
        name: 'N/A',
        cod: 0,
    }
    const [searchQuery, setSearchQuery] = useState('')
    const [location, setLocation] = useState('')
    const [weatherData, setWeatherData] = useState(initialWeatherState)
    const [unsplashImage, setUnsplashImage] = useState('')

    // Get weather data from OpenWeatherMap API by user's location
    async function getWeatherDataFromLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const lat = position.coords.latitude
                const lon = position.coords.longitude
                try {
                    const response = await fetch(
                        `${API.weather.base}?lat=${lat}&lon=${lon}&units=metric&APPID=${API.weather.key}`
                    )
                    const data = await response.json()
                    setWeatherData(data)
                } catch (err) {
                    setWeatherData(initialWeatherState)
                }
            })
        }
    }

    // Fetch data from OpenWeatherMap API when app is loaded
    // This will retrive the data from user's location
    useEffect(() => {
        getWeatherDataFromLocation()
    }, [])

    // Process search query created by Searchbox component
    function searchHandler(query) {
        setSearchQuery(query)
    }

    return (
        <div className="App">
            <header>
                <Announcement message="Hello World" />
                {/* <Searchbox getSearchQuery={searchHandler} /> */}
            </header>
            <TemperatureBody
                name={weatherData.name}
                temp={weatherData.main.temp}
                description={weatherData.weather[0].description}
                feels_like={weatherData.main.feels_like}
                humidity={weatherData.main.humidity}
                weatherData={weatherData}
            />
            <Dashboard />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default App
