import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import Announcement from './components/header/Announcement'
import Navbar from './components/header/Navbar'
import MenuTab from './components/header/MenuTab.js'
import TemperatureBody from './components/body/TemperatureBody'
import Dashboard from './components/body/Dashboard'
import Footer from './components/footer/Footer'

const openWeatherCurrentUrl = 'https://api.openweathermap.org/data/2.5/weather'
// const openWeatherForecastURL =
//     'https://api.openweathermap.org/data/2.5/forecast'
const openWeatherKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY
// const unsplashUrl = 'https://api.unsplash.com/photos/random'
// const unsplashKey = process.env.REACT_APP_UNSPLASH_API_KEY

// Main App
function App() {
    // Create a dummy data before fetching data from OpenWeatherMap API
    const initialWeatherState = {
        coord: {
            lon: 0,
            lat: 0,
        },
        weather: [
            {
                id: 0,
                main: '',
                description: '',
                icon: '',
            },
        ],
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
        wind: {
            speed: 0,
            deg: 0,
            gust: 0,
        },
        rain: {
            '1h': 0,
        },
        clouds: {
            all: 0,
        },
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
        name: '',
        cod: 0,
    }

    const [searchStatus, setSearchStatus] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [weatherData, setWeatherData] = useState(initialWeatherState)
    // const [weatherForecastData, setWeatherForecastData] =
    //     useState(initialWeatherState)
    // const [unsplashImage, setUnsplashImage] = useState('')

    // Get weather data from OpenWeatherMap API by search query
    async function getWeatherDataFromQuery(query) {
        // setSearchStatus('searching')

        // Fetch data from OpenWeatherMap API
        // Example request: https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=efefefefefefefefefe
        const response = await fetch(
            `${openWeatherCurrentUrl}?q=${query}&units=metric&APPID=${openWeatherKey}`
        )
            .then(async (response) => {
                // console.log(response)

                if (response.ok) {
                    setSearchStatus('')
                    const data = await response.json()
                    setWeatherData(data)
                    // localStorage.setItem('searchQuery', query)
                    // localStorage.setItem('weatherData', response)
                } else if (response.status === 404) {
                    setSearchStatus('Sorry, we could not find your location')
                } else {
                    // throw Error(response.statusText)
                    setSearchStatus(
                        `Sorry, we are experiencing technical difficulties (HTTP code ${response.status})`
                    )
                }
            })
            .catch((err) => {
                console.log(err)
                setSearchStatus(
                    'Sorry, we are experiencing error fetching weather data'
                )
            })
    }

    // Get weather data from OpenWeatherMap API by user's location
    async function getWeatherDataFromLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const lat = position.coords.latitude
                const lon = position.coords.longitude
                try {
                    const response = await fetch(
                        `${openWeatherCurrentUrl}?lat=${lat}&lon=${lon}&units=metric&APPID=${openWeatherKey}`
                    )
                    const data = await response.json()
                    setWeatherData(data)
                } catch (err) {
                    setWeatherData(initialWeatherState)
                    console.log('error', err)
                }
            })
        }
    }

    // Fetch user's location and fetch OpenWeatherMap API when app is loaded
    // useEffect(() => {
    //     console.log('fetch with Location')
    //     getWeatherDataFromLocation()
    // }, [])

    // Fetch OpenWeatherMap API using search query when searchQuery is changed
    useEffect(() => {
        if (searchQuery) {
            getWeatherDataFromQuery(searchQuery)
        }
    }, [searchQuery])

    return (
        <div className="App">
            <header>
                <Navbar setSearchQuery={setSearchQuery} />
                <Announcement message={searchStatus} />
            </header>
            <MenuTab />
            <TemperatureBody weatherData={weatherData} />
            <Dashboard weatherData={weatherData} />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default App
