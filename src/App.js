import React from 'react'
import { useState } from 'react'

// CSS
import './App.css'

// Components
import Announcement from './components/header/Announcement'
import Searchbox from './components/header/Searchbox'
// import TemperatureBody from './components/body/TemperatureBody'
import Dashboard from './components/body/Dashboard'
import Footer from './components/footer/Footer'

const API = {
    // OpenWeatherMap API
    weather: {
        key: '1bd8a19c06ea193a3d3915edee0edd9c',
        base: 'https://api.openweathermap.org/data/2.5/weather',
    },
    // Unsplash API
    // unsplash: {
    //     key: 'c4b0c4b0c4b0c4b0c4b0c4b0c4b0c4b0',
    //     base: 'https://api.unsplash.com/',
    // },
}

let cache = {}

export { API, cache }

const MyContext = React.createContext()

// Main App
function App() {
    let [location, weatherData, setWeatherData] = useState({})

    // Get weather data from OpenWeatherMap API
    async function getWeatherData(location) {
        // Check if location is in cache
        if (cache[location]) {
            console.log(cache[location])
            return cache[location]
        }

        // Fetch data from OpenWeatherMap API
        const response = await fetch(
            `${API.weather.base}?q=${location}&units=metric&APPID=${API.weather.key}`
        )
        const data = await response.json()

        // Store data to cache
        cache[location] = data
        console.log(data)

        setWeatherData = data
        return data
    }

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

    // const [weatherData, setWeatherData] = useState({});
    // const [unsplashData, setUnsplashData] = useState({});

    const [inputData, setInputData] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

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
            <body>
                {/* <MyContext.Provider value={{ inputData, setInputData }}>
                    <div className="body">
                        <TemperatureBody
                        location={location}
                        weatherData={weatherData}
                    />
                        <Dashboard />
                    </div>
                </MyContext.Provider> */}
            </body>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default App
