import React from 'react'
import logo from './logo.svg'
import './App.css'

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

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
