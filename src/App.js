import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { initialUnsplashImage, initialWeatherData } from './data'
import Announcement from './components/header/Announcement'
import Navbar from './components/header/Navbar'
import TemperatureBody from './components/body/TemperatureBody'
import TemperatureForecast from './components/body/TemperatureForecast'
import Dashboard from './components/body/Dashboard'
import Footer from './components/footer/Footer'

const service = {
    openWeather: {
        current: 'https://api.openweathermap.org/data/2.5/weather',
        forecast: 'https://api.openweathermap.org/data/2.5/forecast',
        geoCode: {
            direct: 'https://api.openweathermap.org/geo/1.0/direct',
            reverse: 'https://api.openweathermap.org/geo/1.0/reverse',
        },
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
    const [geolocation, setGeolocation] = useState({ lat: 0, lon: 0 })
    const [weatherData, setWeatherData] = useState(initialWeatherData)
    const [weatherMetric, setWeatherMetric] = useState('metric')
    const [weatherForecastData, setWeatherForecastData] =
        useState(initialWeatherData)
    const [unsplashImage, setUnsplashImage] = useState(initialUnsplashImage)
    const [darkMode, setDarkMode] = useState(false)

    // Get weather data from OpenWeatherMap API by user's location
    const getWeatherData = async (geolocation) => {
        const url = `${service.openWeather.current}?lat=${geolocation.lat}&lon=${geolocation.lon}&units=${weatherMetric}&appid=${service.openWeather.key}`
        const data = axios.get(url).then((response) => response.data)
        return data
    }

    // Get forecast weather data from OpenWeatherMap API by search query
    const getForecastWeatherData = (geolocation) => {
        // Example OpenWeatherMap API URL: https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&units=metric&appid=b6907d289e10d714a6e88b30761fae22
        const url = `${service.openWeather.forecast}?lat=${geolocation.lat}&lon=${geolocation.lon}&units=${weatherMetric}&appid=${service.openWeather.key}`
        const data = axios.get(url).then((response) => response.data.list)
        return data
    }

    // Get unsplash image that matches the user's searchQuery input
    const getUnsplashImage = (searchQuery) => {
        const url = `${service.unsplash.url}?client_id=${service.unsplash.key}&query=${searchQuery}%20city&per_page=2&orientation=landscape`
        const data = axios.get(url).then((response) => response.data)
        const payload = [
            data.results[0].urls.regular,
            data.results[0].blur_hash,
            data.results[0].user.name,
        ]
        return payload
    }

    // Converts latitude and longitude to city name
    const decodeGeocoding = async (geolocation) => {
        const limit = 1
        const url = `${service.openWeather.geoCode.reverse}?lat=${geolocation.lat}&lon=${geolocation.lon}&limit=${limit}&appid=${service.openWeather.key}`
        const data = axios.get(url).then((response) => response.data)
        const cityName = data[0].name
        return cityName
    }

    // Retrieves user's location by their IP address
    const getUserLocationUsingIp = async () => {
        // Get the user's IP address.
        const ipAddress = navigator.ip

        // Make a request to the Geolocation API to get the user's location.
        const response = fetch(`https://ipinfo.io/${ipAddress}`)
            .then((response) => response.json())
            .then((data) => {
                // Get the user's latitude and longitude.
                const lat = data.latitude
                const lon = data.longitude

                return { lat: lat, lon: lon }
            })
    }

    // When searchQuery or geolocation is changed, trigger this useEffect
    useEffect(() => {
        const fetchData = async () => {
            // Skip the execution if there is no given geolocation given (or set as 0)
            if (geolocation.lat !== 0 && geolocation.lon !== 0) {
                // Fill in the searchQuery if not given (i.e., provoked by IP address or user's location)
                if (!searchQuery) {
                    try {
                        await decodeGeocoding(geolocation).then((cityName) => {
                            console.log(cityName)
                            setSearchQuery(cityName)
                        })
                    } catch (error) {
                        // Handle any errors that occurred during the API requests
                        console.error(error)
                    }
                }

                try {
                    await getWeatherData(geolocation).then((weatherData) => {
                        console.log(weatherData)
                        // setWeatherData(weatherData);
                    })

                    await getForecastWeatherData(geolocation).then(
                        (weatherForecastData) => {
                            console.log(weatherForecastData)
                            // setWeatherData(weatherData);
                        }
                    )

                    await getUnsplashImage(searchQuery).then(
                        (unsplashImage) => {
                            console.log(unsplashImage)
                            // setWeatherData(weatherData);
                        }
                    )

                    // const weatherForecastData = await getForecastWeatherData(geolocation);
                    // console.log(weatherForecastData);
                    // // setWeatherForecastData(weatherForecastData);
                    //
                    // const unsplashImage = await getUnsplashImage(searchQuery);
                    // console.log(unsplashImage);
                    // // setUnsplashImage(unsplashImage);
                } catch (error) {
                    // Handle any errors that occurred during the API requests
                    console.error(error)
                }
            }
        }

        fetchData()
    }, [searchQuery, geolocation])

    return (
        <div className="App">
            <Navbar
                searchQuery={(e) => {
                    setSearchQuery(e)
                }}
                geolocation={(e) => setGeolocation(e)}
                announceMessage={(e) => setSearchStatus(e)}
                darkMode={(e) => setDarkMode(e)}
                weatherMetric={(e) => setWeatherMetric(e)}
            />
            <Announcement announceMessage={searchStatus} />

            <TemperatureBody
                weatherData={weatherData}
                weatherMetric={weatherMetric}
                unsplashImage={unsplashImage}
            />
            <TemperatureForecast weatherForecastData={weatherForecastData} />
            <Dashboard weatherData={weatherData} />

            <Footer />
        </div>
    )
}

export default App
