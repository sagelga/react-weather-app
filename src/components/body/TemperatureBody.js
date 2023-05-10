import React from 'react'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'

const TemperatureBody = (props) => {
    const locationName = props.weatherData.name
    const temperature = props.weatherData.main.temp
    const weatherCondition = props.weatherData.weather[0].description
    const feelsLike = props.weatherData.main.feels_like
    const humidity = props.weatherData.main.humidity
    const metric = props.weatherMetric === 'metric' ? 'C°' : 'F°'
    const unsplashImage = props.unsplashImage

    // If there is no value for the name, return an empty div
    if (props.weatherData.name === null) {
        return <div></div>
    }

    return (
        <Container className="container">
            <div className="paper-container">
                <Paper className="body-temperature-main-card">
                    <h2 className="city">Currently in {locationName}, it's</h2>
                    <h1 className="current">
                        {temperature} {metric} with {weatherCondition}
                    </h1>
                    <h2>
                        Feels like {feelsLike} {metric} with {humidity}%
                        humidity
                    </h2>
                </Paper>
            </div>
            <img src={unsplashImage} alt="weather" className="weather-image" />
        </Container>
    )
}
export default TemperatureBody
