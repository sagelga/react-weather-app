import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import { initialWeatherState } from './data'
import Announcement from './components/header/Announcement'
import Navbar from './components/header/Navbar'
import TemperatureBody from './components/body/TemperatureBody'
import TemperatureForecast from './components/body/TemperatureForecast'
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
    const [searchStatus, setSearchStatus] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [weatherData, setWeatherData] = useState(initialWeatherState)
    const [weatherMetric, setWeatherMetric] = useState('metric')
    // const [weatherForecastData, setWeatherForecastData] =
    //     useState(inittate)
    // const [unsplashImage, setUnsplashImage] = useState('')

    // Get weather data from OpenWeatherMap API by search query
    async function getWeatherDataFromQuery(query) {
        // Fetch data from OpenWeatherMap API
        // Example request: https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=efefefefefefefefefe
        const response = await fetch(
            `${openWeatherCurrentUrl}?q=${query}&units=${weatherMetric}&APPID=${openWeatherKey}`
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
            // @todo : Replace this with spinner
            setSearchStatus('Retriving location')

            navigator.geolocation.getCurrentPosition(async (position) => {
                const lat = position.coords.latitude
                const lon = position.coords.longitude
                try {
                    const response = await fetch(
                        `${openWeatherCurrentUrl}?lat=${lat}&lon=${lon}&units=metric&APPID=${openWeatherKey}`
                    )
                    const data = await response.json()
                    setWeatherData(data)
                    setSearchStatus('')
                } catch (err) {
                    setWeatherData(initialWeatherState)
                    console.log('error', err)
                    setSearchStatus(
                        'Sorry, we are experiencing error fetching geolocation weather data'
                    )
                }
            })
        } else {
            setSearchStatus(
                'Sorry, we could not retrive your location. Enable geolocation'
            )
        }
    }

    const getDataFromLocation = () => {
        getWeatherDataFromLocation()
    }

    // Fetch OpenWeatherMap API using search query when searchQuery is changed
    useEffect(() => {
        if (searchQuery) {
            getWeatherDataFromQuery(searchQuery)
        }
    }, [searchQuery])

    return (
        <div className="App">
            <header>
                <Navbar
                    setSearchQuery={setSearchQuery}
                    onButtonClick={getDataFromLocation}
                />
                <Announcement message={searchStatus} />
            </header>
            <TemperatureBody weatherData={weatherData} />
            <TemperatureForecast />
            <Dashboard weatherData={weatherData} />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default App
