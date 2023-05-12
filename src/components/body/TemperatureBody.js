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
    const unsplashImage = props.unsplashImage.urls.regular
    const unsplashCredits = props.unsplashImage.user.name

    return (
        <Container className="container">
            <div className="paper-container">
                {/* <Paper className="body-temperature-main-card"> */}
                <h2 className="city">Currently in {locationName}, it's</h2>
                <h1 className="current">
                    {temperature} {metric} with {weatherCondition}
                </h1>
                <h2>
                    Feels like {feelsLike} {metric} with {humidity}% humidity
                </h2>
                {/* </Paper> */}
            </div>
            <figure>
                <img
                    src={unsplashImage}
                    alt="city landscapes created by Unsplash user"
                    className="weather-image"
                    height="400px"
                    loading="lazy"
                />
                <figcaption className="image-credit">
                    Photo by {unsplashCredits} on Unsplash
                </figcaption>
            </figure>
        </Container>
    )
}
export default TemperatureBody
