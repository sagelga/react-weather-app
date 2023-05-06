import React from 'react'
import Container from '@mui/material/Container'

function TemperatureBody(props) {
    // Building variables from props and passing it to component
    let locationName = ''
    let temperature = ''
    let weatherCondition = ''
    let feelsLike = ''
    let humidity = ''
    let metric = 'C°'

    try {
        locationName = props.weatherData.name
        temperature = props.weatherData.main.temp
        weatherCondition = props.weatherData.weather[0].description
        feelsLike = props.weatherData.main.feels_like
        humidity = props.weatherData.main.humidity
        // metric = 'C°'
    } catch (error) {
        console.log(error)
    }

    // If there is no value for the name, return an empty div
    if (props.weatherData.name === null) {
        return <div></div>
    }

    return (
        <Container>
            <div className="body-main">
                <div className="body-temperature-main-card">
                    <h2 className="city">Currently in {locationName}, it's</h2>
                    <h1 className="current">
                        {temperature} {metric} with {weatherCondition}
                    </h1>
                    <h2>
                        Feels like {feelsLike} {metric} with {humidity}%
                        humidity
                    </h2>
                </div>
            </div>
        </Container>
    )
}
export default TemperatureBody
