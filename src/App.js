import React, { useState, useEffect, useCallback, useRef } from 'react'
import './App.css'
import { initialWeatherData, initialUnsplashImage } from './data'
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
    // Set state to variables
    const [searchStatus, setSearchStatus] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [weatherData, setWeatherData] = useState(initialWeatherData)
    const [weatherMetric, setWeatherMetric] = useState('metric')
    const [weatherForecastData, setWeatherForecastData] =
        useState(initialWeatherData)
    const [unsplashImage, setUnsplashImage] = useState(initialUnsplashImage)

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
    const getUnsplashImage = async (query) => {
        const url = `${service.unsplash.url}?client_id=${service.unsplash.key}&query=${query}%20city&per_page=2&orientation=landscape`
        const response = await fetch(url).then(async (response) => {
            if (response.ok) {
                setSearchStatus('')
                const data = await response.json()
                const payload = [
                    data.results[0].urls.regular,
                    data.results[0].blur_hash,
                    data.results[0].user.name,
                ]
                setUnsplashImage(payload)
                console.log('getUnsplashImage')
                console.log(payload)
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
    // and triggers the data update on the weather and forecast data
    const weatherMetricToggle = (data) => {
        if (data === 'metric') {
            setWeatherMetric('imperial')
        } else {
            setWeatherMetric('metric')
        }

        getWeatherDataFromQuery(searchQuery)
    }

    // Fetch OpenWeather API on weather and forecast, including Unsplash when the searchQuery state is change
    useEffect(() => {
        // set timer to 500 ms to delay the function call
        const timer = setTimeout(() => {
            // console.log(searchQuery)
            console.log('useEffect searchQuery')
            if (searchQuery !== '') {
                getWeatherDataFromQuery(searchQuery)
                getUnsplashImage(searchQuery)
            }
        }, 500)

        return () => clearTimeout(timer)
    }, [searchQuery])

    return (
        <div className="App">
            <header>
                <Navbar
                    setSearchQuery={setSearchQuery}
                    getLocation={getDataFromLocation}
                    weatherMetricToggle={weatherMetricToggle}
                />
                <Announcement message={searchStatus} />
            </header>
            <TemperatureBody
                weatherData={weatherData}
                weatherMetric={weatherMetric}
                unsplashImage={unsplashImage}
            />
            <Dashboard weatherData={weatherData} />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default App
