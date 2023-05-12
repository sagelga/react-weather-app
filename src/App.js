import React, { useCallback } from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import { initialWeatherData, initialUnsplashData } from './data'
import Announcement from './components/header/Announcement'
import Navbar from './components/header/Navbar'
import TemperatureBody from './components/body/TemperatureBody'
import Dashboard from './components/body/Dashboard'
import Footer from './components/footer/Footer'

const service = {
    openWeather: {
        current: 'https://api.openweathermap.org/data/2.5/weather',
        forecast: 'https://api.openweathermap.org/data/2.5/forecast',
        key: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
    },
    unsplash: {
        url: 'https://api.unsplash.com/search/photos',
        key: process.env.REACT_APP_UNSPLASH_API_KEY,
    },
}

// Main App
const App = () => {
    const [searchStatus, setSearchStatus] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [weatherData, setWeatherData] = useState(initialWeatherData)
    const [weatherMetric, setWeatherMetric] = useState('metric')
    const [weatherForecastData, setWeatherForecastData] =
        useState(initialWeatherData)
    const [unsplashUrl, setUnsplashUrl] = useState(initialUnsplashData)

    // Get weather data from OpenWeatherMap API by search query
    const getWeatherDataFromQuery = async (query) => {
        // Fetch data from OpenWeatherMap API: https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=efefefefefefefefefe
        const response = await fetch(
            `${service.openWeather.current}?q=${query}&units=${weatherMetric}&APPID=${service.openWeather.key}`
        )
            .then(async (response) => {
                if (response.ok) {
                    setSearchStatus('')
                    const data = await response.json()
                    setWeatherData(data)
                } else if (response.status === 404) {
                    setSearchStatus('Sorry, we could not find your location')
                } else {
                    console.error(response.statusText)
                    setSearchStatus(
                        `Sorry, we are experiencing technical difficulties with Open Weather (HTTP code ${response.status})`
                    )
                }
            })
            .catch((err) => {
                console.error(err)
                setSearchStatus(
                    'Sorry, we are experiencing error fetching weather data'
                )
            })
    }

    // Get weather data from OpenWeatherMap API by user's location
    const getWeatherDataFromLocation = async () => {
        if (navigator.geolocation) {
            // @todo : Replace this with spinner
            setSearchStatus('Retriving location')

            navigator.geolocation.getCurrentPosition(async (position) => {
                const lat = position.coords.latitude
                const lon = position.coords.longitude
                try {
                    const response = await fetch(
                        `${service.openWeather.current}?lat=${lat}&lon=${lon}&units=${weatherMetric}&APPID=${service.openWeather.key}`
                    )
                    const data = await response.json()
                    setWeatherData(data)
                    setSearchStatus('')
                } catch (err) {
                    setWeatherData(initialWeatherData)
                    console.error(err)
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

    // Get unsplash image that matches the user's searchQuery input
    const getUnsplashUrl = async (query) => {
        const url = `${service.unsplash.url}?client_id=${service.unsplash.key}&query=${query}%20city&per_page=2&orientation=landscape`
        const response = await fetch(url).then(async (response) => {
            if (response.ok) {
                setSearchStatus('')
                const data = await response.json()
                setUnsplashUrl(data.results[0])
            } else if (response.status === 404) {
                setSearchStatus('Sorry, we could not find the image')
            } else {
                console.error(response.statusText)
                setSearchStatus(
                    `Sorry, we are experiencing technical difficulties with Unsplash (HTTP code ${response.status})`
                )
            }
        })
    }

    // Calls getWeatherDataFromLocation and getUnsplashImage
    const getDataFromLocation = () => {
        getWeatherDataFromLocation()
    }

    // Switch between imperial and metric units of measurement
    const weatherMetricHandler = (data) => {
        if (data === 'metric') {
            setWeatherMetric('imperial')
        } else {
            setWeatherMetric('metric')
        }
    }

    // Fetch OpenWeatherMap API using search query when searchQuery is changed
    useEffect(() => {
        // console.log(searchQuery)
        if (searchQuery !== '') {
            getWeatherDataFromQuery(searchQuery)
            getUnsplashUrl(searchQuery)
        }
    }, [searchQuery, weatherMetric])

    return (
        <div className="App">
            <header>
                <Navbar
                    setSearchQuery={setSearchQuery}
                    getLocation={getDataFromLocation}
                    weatherMetricHandler={weatherMetricHandler}
                />
                <Announcement message={searchStatus} />
            </header>
            <TemperatureBody
                weatherData={weatherData}
                weatherMetric={weatherMetric}
                unsplashImage={unsplashUrl}
            />
            <Dashboard weatherData={weatherData} />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default App
